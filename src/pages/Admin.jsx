import React, { useState, useEffect } from "react";
import {
  Filter,
  Clock,
  CheckCircle,
  Pill,
  FileText,
  Search,
  ChevronDown,
  ChevronUp,
  Send,
  RefreshCw,
  X,
  Users,
} from "lucide-react";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDevMode, setIsDevMode] = useState(false);

  // API 베이스 URL 가져오기
  const getApiBaseUrl = () => {
    return isDevMode
      ? "https://api.pilllive.com"
      : "https://v2.pilllive.com";
  };
  const [users, setUsers] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [filters, setFilters] = useState({
    noFilter: true,
    accessPeriod: null, // "within1week" | "over1week"
    complianceRate: null, // "under300" | "over300"
    remainingDays: null, // "under3days" | "notRegistered"
    membership: null, // "member" | "trialEnding" | "cancelled"
    language: null, // "ko" | "en" | "ja" | "zh"
  });
  const [allUsers, setAllUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageTitle, setMessageTitle] = useState("우리가족의 복약 현황은?");
  const [messageContent, setMessageContent] = useState(
    "우리 약통 만들고 우리 가족의 건강을 돌봐주세요 ☺️"
  );
  const [selectedUserIds, setSelectedUserIds] = useState(new Set());
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isFilterExpanded, setIsFilterExpanded] = useState(true);

  // 자주 쓰는 프리셋
  const presets = [
    {
      id: 1,
      title: "복용 시간 알림",
      content: "지금 복용 시간입니다. 약을 복용해주세요.",
    },
    {
      id: 2,
      title: "복용 잊지 마세요",
      content: "오늘도 건강한 하루를 위해 약을 복용해주세요.",
    },
    {
      id: 3,
      title: "약 복용 시간입니다",
      content: "약 복용 시간이 되었습니다. 꼭 챙겨드세요!",
    },
    {
      id: 4,
      title: "복용 확인",
      content: "오늘 약을 복용하셨나요? 놓치지 말고 챙겨드세요.",
    },
    {
      id: 5,
      title: "약을 복용하셨나요?",
      content: "복용 시간이 지났습니다. 약을 복용하셨는지 확인해주세요.",
    },
  ];

  const handlePresetChange = (e) => {
    const selectedPreset = presets.find(
      (preset) => preset.id === parseInt(e.target.value)
    );
    if (selectedPreset) {
      setMessageTitle(selectedPreset.title);
      setMessageContent(selectedPreset.content);
    }
  };

  // 날짜 포맷팅 함수 (yy.mm.dd)
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}.${month}.${day}`;
  };


  // 닉네임 자르기 (20자 이상이면 ...)
  const truncateNickname = (nickname) => {
    if (!nickname) return "-";
    if (nickname.length > 20) {
      return nickname.substring(0, 20) + "...";
    }
    return nickname;
  };

  // 소스 아이콘 배경색 가져오기
  const getSourceIconBg = (source) => {
    const bgMap = {
      apple: "bg-black",
      google: "bg-white border border-gray-300",
      kakao: "bg-yellow-400",
    };
    return bgMap[source] || "bg-gray-200";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // 기본 비밀번호 1234로 바로 로그인
    // if (password === "1234") {
    //   setIsAuthenticated(true);
    //   setIsLoading(false);
    //   return;
    // }

    try {
      // 비밀번호를 base64로 인코딩
      const encodedPassword = btoa(password);

      const response = await fetch(`${getApiBaseUrl()}/api/admin/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: encodedPassword,
        }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setError("비밀번호가 올바르지 않습니다.");
      }
    } catch (err) {
      setError("로그인 중 오류가 발생했습니다.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Dev 모드 로그인 핸들러
  const handleDevLogin = () => {
    setIsDevMode(true);
    setIsAuthenticated(true);
  };

  // 로그인 성공 후 사용자 데이터 가져오기
  useEffect(() => {
    if (isAuthenticated) {
      fetchUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const fetchUsers = async () => {
    setIsLoadingUsers(true);
    try {
      const response = await fetch(`${getApiBaseUrl()}/api/admin/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data) {
          console.log(result.data);
          const fetchedUsers = result.data.users || [];
          setAllUsers(fetchedUsers);
          setUsers(fetchedUsers);
        }
      } else {
        console.error("Failed to fetch users");
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  // 필터링 함수
  const filterUsers = () => {
    if (filters.noFilter) {
      setUsers(allUsers);
      return;
    }

    let filtered = [...allUsers];

    // 1. 접속 기간 필터링
    if (filters.accessPeriod) {
      const now = new Date();
      const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      filtered = filtered.filter((user) => {
        if (!user.lastAccessDate) return filters.accessPeriod === "over1week";
        const lastAccess = new Date(user.lastAccessDate);
        if (filters.accessPeriod === "within1week") {
          return lastAccess >= oneWeekAgo;
        } else if (filters.accessPeriod === "over1week") {
          return lastAccess < oneWeekAgo;
        }
        return true;
      });
    }

    // 2. 복약 이행률 필터링 (300% 기준)
    if (filters.complianceRate) {
      filtered = filtered.filter((user) => {
        if (filters.complianceRate === "under300") {
          return (
            user.complianceRate3Days !== null &&
            user.complianceRate3Days !== undefined &&
            user.complianceRate3Days < 300
          );
        } else if (filters.complianceRate === "over300") {
          return (
            user.complianceRate3Days !== null &&
            user.complianceRate3Days !== undefined &&
            user.complianceRate3Days >= 300
          );
        }
        return true;
      });
    }

    // 3. 약통 잔여량 필터링
    if (filters.remainingDays) {
      filtered = filtered.filter((user) => {
        if (filters.remainingDays === "under3days") {
          return (
            user.remainingDays !== null &&
            user.remainingDays !== undefined &&
            user.remainingDays <= 3
          );
        } else if (filters.remainingDays === "notRegistered") {
          return !user.hasAlarm; // 약 등록 안 함
        }
        return true;
      });
    }

    // 4. 멤버십 필터링
    if (filters.membership) {
      filtered = filtered.filter((user) => {
        if (filters.membership === "member") {
          return user.hasMembership === true;
        } else if (filters.membership === "trialEnding") {
          return (
            user.daysUntilExpiry !== null &&
            user.daysUntilExpiry !== undefined &&
            user.daysUntilExpiry <= 3
          );
        } else if (filters.membership === "cancelled") {
          return (
            user.daysSinceCancellation !== null &&
            user.daysSinceCancellation !== undefined
          );
        }
        return true;
      });
    }

    // 5. 언어 필터링
    if (filters.language) {
      filtered = filtered.filter((user) => user.lang === filters.language);
    }

    // 검색 필터링
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (user) =>
          user.nickname?.toLowerCase().includes(query) ||
          user.email?.toLowerCase().includes(query)
      );
    }

    setUsers(filtered);
  };

  // 필터나 검색어 변경 시 필터링 실행
  useEffect(() => {
    if (allUsers.length > 0) {
      filterUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, searchQuery, allUsers.length]);

  // 메시지 전송 함수
  const handleSendMessage = async () => {
    if (selectedUserIds.size === 0) {
      setErrorMessage("선택된 유저가 없습니다.");
      setShowErrorModal(true);
      return;
    }

    if (!messageTitle.trim() || !messageContent.trim()) {
      setErrorMessage("제목과 내용을 입력해주세요.");
      setShowErrorModal(true);
      return;
    }

    setIsSendingMessage(true);

    try {
      const userIdList = Array.from(selectedUserIds);
      const body = {
        userIdList: userIdList,
        title: messageTitle,
        body: messageContent,
      }
      console.log(body);
      const response = await fetch(`${getApiBaseUrl()}/api/fcm/sendFcmAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userIdList: userIdList,
          title: messageTitle,
          body: messageContent,
        }),
      });
      
      

      if (response.ok) {
        setShowSuccessModal(true);
        // 성공 시 선택 해제
        setSelectedUserIds(new Set());
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "메시지 전송에 실패했습니다."
        );
        setShowErrorModal(true);
      }
    } catch (err) {
      setErrorMessage("메시지 전송 중 오류가 발생했습니다.");
      setShowErrorModal(true);
      console.error("Send message error:", err);
    } finally {
      setIsSendingMessage(false);
    }
  };

  // 로그인 화면
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">관리자 로그인</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>
            {error && (
              <div className="mb-4 text-sm text-red-600">{error}</div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </button>
          </form>
          <button
            onClick={handleDevLogin}
            className="w-full mt-3 py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Dev 모드 로그인
          </button>
        </div>
      </div>
    );
  }

  // 로그인 성공 후 메인 화면
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* 왼쪽 메뉴바 영역 */}
        <div className="w-48 bg-white border-r border-gray-200 p-6">
          <div className="mb-8 flex items-center gap-2">
            <img
              src="/app_icon.png"
              alt="Pill Live"
              className="w-8 h-8 rounded-lg"
            />
            <h2 className="text-xl font-bold text-gray-800">Pill Live</h2>
          </div>
          <nav className="space-y-2">
            <div className="text-sm font-medium text-gray-700 mb-4">메뉴</div>
            <div className="px-3 py-2 bg-blue-50 text-blue-600 rounded-md flex items-center gap-2">
              <Send className="w-4 h-4" />
              푸시 캠페인
            </div>
          </nav>
        </div>

        {/* 중앙 컨텐츠 영역 */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              새로운 푸시 메시지 보내기
            </h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-2 flex-1">
                <Filter className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-800">
                  타겟 세그먼트 필터링
                </h2>
                {isFilterExpanded && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFilters({
                        noFilter: true,
                        accessPeriod: null,
                        complianceRate: null,
                        remainingDays: null,
                        membership: null,
                        language: null,
                      });
                    }}
                    className="ml-4 px-3 py-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    필터링 해제하기
                  </button>
                )}
              </div>
              <button
                onClick={() => setIsFilterExpanded(!isFilterExpanded)}
                className="p-1 hover:bg-blue-50 rounded transition-colors"
              >
                {isFilterExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
            </div>
            {isFilterExpanded && (
              <div className="px-6 pb-6 space-y-4">
                {/* 2열 그리드 */}
                <div className="grid grid-cols-2 gap-4">
                  {/* 왼쪽 열 */}
                  <div className="space-y-4">
                    {/* 접속 기간 */}
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-sm font-medium text-gray-700">
                        접속 기간
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              accessPeriod:
                                filters.accessPeriod === "within1week"
                                  ? null
                                  : "within1week",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                            filters.accessPeriod === "within1week"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <Clock className="w-3 h-3" />
                          1주일 내
                        </button>
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              accessPeriod:
                                filters.accessPeriod === "over1week"
                                  ? null
                                  : "over1week",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                            filters.accessPeriod === "over1week"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <Clock className="w-3 h-3" />
                          1주일 이상
                        </button>
                      </div>
                    </div>

                    {/* 약통 잔여량 */}
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-sm font-medium text-gray-700">
                        약통 잔여량
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              remainingDays:
                                filters.remainingDays === "under3days"
                                  ? null
                                  : "under3days",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                            filters.remainingDays === "under3days"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <Pill className="w-3 h-3" />
                          3일 이하
                        </button>
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              remainingDays:
                                filters.remainingDays === "notRegistered"
                                  ? null
                                  : "notRegistered",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                            filters.remainingDays === "notRegistered"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <Pill className="w-3 h-3" />
                          미등록
                        </button>
                      </div>
                    </div>

                    {/* 멤버십 기능 */}
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-sm font-medium text-gray-700">
                        멤버십
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              membership:
                                filters.membership === "member"
                                  ? null
                                  : "member",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                            filters.membership === "member"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <FileText className="w-3 h-3" />
                          회원
                        </button>
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              membership:
                                filters.membership === "trialEnding"
                                  ? null
                                  : "trialEnding",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                            filters.membership === "trialEnding"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <FileText className="w-3 h-3" />
                          종료임박
                        </button>
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              membership:
                                filters.membership === "cancelled"
                                  ? null
                                  : "cancelled",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                            filters.membership === "cancelled"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <FileText className="w-3 h-3" />
                          취소자
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 오른쪽 열 */}
                  <div className="space-y-4">
                    {/* 복약 이행률 */}
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-sm font-medium text-gray-700">
                        복약 이행률
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              complianceRate:
                                filters.complianceRate === "under300"
                                  ? null
                                  : "under300",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                            filters.complianceRate === "under300"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <CheckCircle className="w-3 h-3" />
                          50% 미만
                        </button>
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              complianceRate:
                                filters.complianceRate === "over300"
                                  ? null
                                  : "over300",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                            filters.complianceRate === "over300"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <CheckCircle className="w-3 h-3" />
                          3일 100%
                        </button>
                      </div>
                    </div>

                    {/* 다국어 */}
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-sm font-medium text-gray-700">
                        다국어
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              language:
                                filters.language === "ko" ? null : "ko",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            filters.language === "ko"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          한국어
                        </button>
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              language:
                                filters.language === "en" ? null : "en",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            filters.language === "en"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          영어
                        </button>
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              language:
                                filters.language === "ja" ? null : "ja",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            filters.language === "ja"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          일본어
                        </button>
                        <button
                          onClick={() => {
                            setFilters({
                              ...filters,
                              noFilter: false,
                              language:
                                filters.language === "zh" ? null : "zh",
                            });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            filters.language === "zh"
                              ? "bg-blue-600 text-white"
                              : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          중국어
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 검색 */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-24"></div>
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="이름 또는 이메일 검색..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Pill Live 유저 : {users.length}명
              </h2>
              <button
                onClick={fetchUsers}
                disabled={isLoadingUsers}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="새로고침"
              >
                <RefreshCw
                  className={`w-5 h-5 ${isLoadingUsers ? "animate-spin" : ""}`}
                />
              </button>
            </div>
            {isLoadingUsers ? (
              <div className="text-center py-8 text-gray-500">
                로딩 중...
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                        <input
                          type="checkbox"
                          checked={
                            users.length > 0 &&
                            selectedUserIds.size === users.length
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              // 전체 선택
                              const allIds = new Set(
                                users.map((user) => user.userId)
                              );
                              setSelectedUserIds(allIds);
                            } else {
                              // 전체 해제
                              setSelectedUserIds(new Set());
                            }
                          }}
                          className="rounded"
                        />
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                        프로필
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                        닉네임
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                        마지막 접속일
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                        약 등록
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                        잔여일
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                        3일 이행률
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                        멤버십
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                        멤버십 시작일
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">
                        취소일
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.length === 0 ? (
                      <tr>
                        <td
                          colSpan="10"
                          className="px-4 py-8 text-center text-gray-500"
                        >
                          유저가 없습니다.
                        </td>
                      </tr>
                    ) : (
                      users.map((user, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <input
                              type="checkbox"
                              checked={selectedUserIds.has(user.userId)}
                              onChange={(e) => {
                                const newSelected = new Set(selectedUserIds);
                                if (e.target.checked) {
                                  newSelected.add(user.userId);
                                } else {
                                  newSelected.delete(user.userId);
                                }
                                setSelectedUserIds(newSelected);
                              }}
                              className="rounded"
                            />
                          </td>
                          <td className="px-4 py-3">
                            <img
                              src={user.profileImage || "/app_icon.png"}
                              alt={user.nickname}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          </td>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            <div>
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-5 h-5 rounded-full flex items-center justify-center ${getSourceIconBg(
                                    user.source
                                  )}`}
                                >
                                  <img
                                    src={`/icon/${user.source}.svg`}
                                    alt={user.source}
                                    className="w-3 h-3"
                                  />
                                </div>
                                <span>{truncateNickname(user.nickname)}</span>
                              </div>
                              <div className="text-xs text-gray-500 mt-1 ml-7">
                                회원가입일: {formatDate(user.signupDate)}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-gray-600">
                            {formatDate(user.lastAccessDate)}
                          </td>
                          <td className="px-4 py-3">
                            {user.hasAlarm ? (
                              <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                                등록
                              </span>
                            ) : (
                              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                미등록
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-gray-600">
                            {user.remainingDays !== null &&
                            user.remainingDays !== undefined
                              ? `${user.remainingDays}일`
                              : "-"}
                          </td>
                          <td className="px-4 py-3 text-gray-600">
                            {user.complianceRate3Days !== null &&
                            user.complianceRate3Days !== undefined
                              ? `${user.complianceRate3Days}%`
                              : "-"}
                          </td>
                          <td className="px-4 py-3">
                            {user.hasMembership ? (
                              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
                                유
                              </span>
                            ) : (
                              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                                무
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-gray-600">
                            {formatDate(user.subscriptionStartDate)}
                          </td>
                          <td className="px-4 py-3 text-gray-600">
                            {formatDate(user.cancellationDate)}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* 우측 메시지 작성 영역 */}
        <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            메시지 작성
          </h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              자주 쓰는 프리셋
            </label>
            <select
              onChange={handlePresetChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              defaultValue=""
            >
              <option value="">프리셋 선택</option>
              {presets.map((preset) => (
                <option key={preset.id} value={preset.id}>
                  {preset.title}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              메시지 제목
            </label>
            <input
              type="text"
              value={messageTitle}
              onChange={(e) => setMessageTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              메시지 내용
            </label>
            <textarea
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-xs text-gray-500 mt-1">
              {messageContent.length}/120자(권장)
            </div>
          </div>

          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-800 mb-2">미리보기</h3>
            <div className="bg-white p-4 rounded border border-gray-200">
              <div className="flex items-start space-x-3">
                <img
                  src="/app_icon.png"
                  alt="Pill Live"
                  className="w-12 h-12 rounded flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-800 mb-1">
                    {messageTitle}
                  </div>
                  <div className="text-xs text-gray-600">{messageContent}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 선택된 유저 표시 */}
          {selectedUserIds.size > 0 && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-800">
                    발송 대상 ({selectedUserIds.size}명)
                  </span>
                </div>
                <button
                  onClick={() => setSelectedUserIds(new Set())}
                  className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-100 rounded transition-colors"
                  title="전체 선택 해제"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {users
                  .filter((user) => selectedUserIds.has(user.userId))
                  .map((user) => (
                    <div
                      key={user.userId}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-blue-300 text-sm text-gray-800"
                    >
                      <span>{user.nickname}</span>
                      <button
                        onClick={() => {
                          const newSelected = new Set(selectedUserIds);
                          newSelected.delete(user.userId);
                          setSelectedUserIds(newSelected);
                        }}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                        title="제거"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <button
            onClick={handleSendMessage}
            disabled={isSendingMessage}
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            메시지 전송하기
          </button>
        </div>
      </div>

      {/* 로딩 오버레이 */}
      {isSendingMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-4">
            <RefreshCw className="w-8 h-8 text-blue-600 animate-spin" />
            <p className="text-lg font-medium text-gray-800">푸시 보내는중</p>
          </div>
        </div>
      )}

      {/* 성공 모달 */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">전송 완료</h3>
            </div>
            <p className="text-gray-600 mb-6">
              메시지가 성공적으로 전송되었습니다.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              확인
            </button>
          </div>
        </div>
      )}

      {/* 실패 모달 */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">전송 실패</h3>
            </div>
            <p className="text-gray-600 mb-6">{errorMessage}</p>
            <button
              onClick={() => setShowErrorModal(false)}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;

