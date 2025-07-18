import { Eye, Heart, Clock, Shield } from "lucide-react";

const features = [
    {
        icon: <Eye className="w-4 h-4 text-blue-500" />,
        bg: "bg-blue-100",
        title: "큰 글씨와 직관적 디자인",
        desc: "눈이 편한 큰 글씨와 간단한 버튼으로 누구나 쉽게 사용.",
    },
    {
        icon: <Heart className="w-4 h-4 text-green-500" />,
        bg: "bg-green-100",
        title: "가족 간 소통 강화",
        desc: "부모님 복약 상황을 확인하고 함께 챙기는 따뜻한 가족 문화.",
    },
    {
        icon: <Clock className="w-4 h-4 text-yellow-500" />,
        bg: "bg-yellow-100",
        title: "생활 패턴 맞춤 알림",
        desc: "식사·취침 시간에 맞춰 자연스럽게 복약 습관 형성.",
    },
    {
        icon: <Shield className="w-4 h-4 text-purple-500" />,
        bg: "bg-purple-100",
        title: "믿을 수 있는 서비스",
        desc: "의료진 자문으로 개발. 개인정보 보호 및 정확성 보장.",
    },
];

const TargetSection = () => {
    return (
        <section id="target" className="py-16 px-4 bg-white">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* 왼쪽 설명 */}
            <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
                <span className="text-blue-500">4050 세대</span>를 위한 맞춤 복약관리 서비스
            </h2>
            <ul className="space-y-8">
                {features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center ${f.bg}`}>
                    {f.icon}
                    </div>
                    <div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-1">{f.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                </li>
                ))}
            </ul>
        </div>

        {/* 오른쪽 후기 카드 */}
        <div className="flex-1 w-full space-y-4">
        {/* 첫 번째 카드 */}
        <div className="rounded-xl shadow p-6 max-w-sm mx-auto bg-green-50">
            <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-lg">🧑‍🦳</div>
            <div>
                <p className="font-semibold text-sm text-gray-800">이○○님 (48세)</p>
                <p className="text-xs text-gray-500">사용 3개월차</p>
            </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
            "처방전 사진만 찍으면 너무 편해요. 예전에는 약 이름 하나하나 입력하느라 힘들었는데!"
            </p>
            <div className="flex text-yellow-400 text-sm">
            {Array(5).fill(0).map((_, i) => (
                <span key={i}>★</span>
            ))}
            </div>
        </div>

        {/* 두 번째 카드 */}
        <div className="rounded-xl shadow p-6 max-w-sm mx-auto bg-blue-50">
            <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-lg">👩‍🦰</div>
            <div>
                <p className="font-semibold text-sm text-gray-800">박○○님 (52세)</p>
                <p className="text-xs text-gray-500">사용 1개월차</p>
            </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
            "편해요! 약 먹는 시간마다 알림이 와서 절대 깜빡하지 않아요."
            </p>
            <div className="flex text-yellow-400 text-sm">
            {Array(5).fill(0).map((_, i) => (
                <span key={i}>★</span>
            ))}
            </div>
        </div>
        </div>

        </div>
        </section>
    );
};

export default TargetSection;
