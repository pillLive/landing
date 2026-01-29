import React, { useState } from "react";
import { Apple, Smartphone, Gift, X, Shield, Bell } from "lucide-react";

const SubscribeSection = () => {
    const [contact, setContact] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!contact) return;
    
        try {
            const res = await fetch("https://api.deckst.me/v1/slack/pilllive-notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contact }),
            });
    
            if (res.ok) {
                alert("신청 완료! 업데이트 시 연락드리겠습니다.");
                setContact("");
                setShowModal(false);
            } else {
                const error = await res.json();
                alert(`신청 실패: ${error.message || "다시 시도해주세요."}`);
                setShowModal(false);
            }
        } catch (err) {
            console.error(err);
            alert("네트워크 오류: 다시 시도해주세요.");
            setShowModal(false);
        }
    };

    return (
        <section id="contact" className="py-16 px-4 bg-[#FCF8F6]">
            <div className="max-w-screen-xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        필라이브가 지키는 약속
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                        복잡한 데이터 추적보다 중요한 것은 당신의 안심입니다.<br />필라이브는 당신의 일상이 더 따뜻해지는 건강한 경험을 만듭니다.
                    </p>
                </div>

                {/* Two Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {/* Left Card - White */}
                    <div className="bg-white/60 rounded-2xl p-10 shadow-sm relative">
                        <div className="absolute top-6 right-6">
                            <img 
                                src="/shield_img.png" 
                                alt="Shield"
                                className="w-10 h-10"
                            />
                        </div>
                        <div className="text-xs text-[#E89F8F] mb-2">변하지 않는 원칙</div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                            언제나 안전하게!
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            사람은 실수할 수 있지만, 기술은 실수하면 안 되니까.<br/>두 번, 세 번 꼼꼼히 확인해서 당신을 지켜드릴게요
                        </p>
                        <div className="flex gap-3">
                            <div className="flex items-center gap-2 bg-white shadow-md rounded-lg px-4 py-2">
                                <Shield className="w-5 h-5 text-[#E89F8F]" />
                                <span className="text-sm text-gray-700">안심 복용 분석</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white shadow-md rounded-lg px-4 py-2">
                                <Bell className="w-5 h-5 text-[#E89F8F]" />
                                <span className="text-sm text-gray-700">가족 안심 알람</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Card - Dark */}
                    <div className="bg-gray-800 rounded-2xl p-10 shadow-sm">
                        <div className="inline-block bg-gray-700 rounded-full px-3 py-1 mb-2">
                            <span className="text-xs text-gray-300">다정한 디자인</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                            마음까지 챙길게요
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            우리는 단순히 숫자를 보여주는 앱이 아니에요. 당신이 더 건강해지고, 가족과 더 가까워지는 그 따뜻한 순간을 위해 존재합니다.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <img 
                                    src="/review-1.png" 
                                    alt="User 1"
                                    className="w-10 h-10 rounded-full border-2 border-gray-800 object-cover"
                                />
                                <img 
                                    src="/review-2.png" 
                                    alt="User 2"
                                    className="w-10 h-10 rounded-full border-2 border-gray-800 object-cover"
                                />
                                <img 
                                    src="/review-3.png" 
                                    alt="User 3"
                                    className="w-10 h-10 rounded-full border-2 border-gray-800 object-cover"
                                />
                            </div>
                            <span className="text-white/50 text-sm">12,000명+이상의 가족과 함께 합니다.</span>
                        </div>
                    </div>
                </div>

                {/* Download Section */}
                <div className="text-center mt-40">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        오늘부터. 건강해져 볼까요?
                    </h3>
                    <p className="text-gray-700 mb-8 text-lg">
                        시간을 놓치면 효과를 놓칩니다. 지금 다운로드하고 우리 가족의 골든타임을 지켜보세요.
                    </p>
            
                    <div className="flex justify-center gap-4 flex-wrap mb-6">
                        <a
                            href="https://onelink.to/629vzn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border rounded-full px-6 py-3 shadow-sm hover:shadow-md transition bg-white text-gray-700 font-semibold"
                        >
                            <Apple size={20} /> App Store
                        </a>
                        <a
                            href="https://onelink.to/629vzn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border rounded-full px-6 py-3 shadow-sm hover:shadow-md transition bg-white text-gray-700 font-semibold"
                        >
                            <Smartphone size={20} /> Google Play
                        </a>
                    </div>
            
                    <div className="flex justify-center items-center text-sm text-gray-700 gap-2">
                        <Gift size={16} className="text-[#E89F8F]" />
                        <span>지금 가입하면 <span className="font-bold">프리미엄 기능 7일 무료!</span></span>
                    </div>
                </div>
            </div>
    
        {/* ✅ 모달 */}
        {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
                <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-black"
                >
                <X size={20} />
                </button>
                <h3 className="text-lg font-bold mb-2">알림 신청</h3>
                <p className="text-sm text-gray-600 mb-4">
                현재 기능 고도화 중입니다. 이메일 또는 전화번호를 남겨주시면 출시 시 바로 알려드리겠습니다.
                </p>
                <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="이메일 또는 전화번호"
                    className="border rounded px-4 py-2 w-full"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
                >
                    신청하기
                </button>
                </form>
            </div>
            </div>
        )}
        </section>
    );
};

export default SubscribeSection;
