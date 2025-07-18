import React from "react";
import { Camera, Bell, Users, Shield, BarChart, Smartphone } from "lucide-react";

const features = [
    {
        icon: <Camera size={20} />,
        title: "사진 한장으로 간편 등록",
        desc: "처방전이나 약봉지 사진만 찍으면 자동으로 복용 약물이 등록됩니다. 복잡한 입력은 필요 없어요!",
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-500",
    },
    {
        icon: <Bell size={20} />,
        title: "스마트한 복용 알림",
        desc: "개인 맞춤 시간에 정확한 알림을 받으세요. 약 복용을 절대 놓치지 마세요!",
        bg: "bg-green-50",
        iconBg: "bg-green-100",
        iconColor: "text-green-500",
    },
    {
        icon: <Users size={20} />,
        title: "가족과 함께 관리",
        desc: "가족 구성원들과 복약 정보를 공유하고 서로의 건강을 챙겨주세요.",
        bg: "bg-orange-50",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500",
    },
    {
        icon: <Shield size={20} />,
        title: "안전한 개인정보 보호",
        desc: "의료 정보는 철저히 암호화되어 보호됩니다. 개인정보 걱정 없이 안심하고 사용하세요.",
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-500",
    },
    {
        icon: <BarChart size={20} />,
        title: "복용 기록 분석",
        desc: "월간, 주간 복용 패턴을 한눈에 확인하고 건강한 복약 습관을 만들어가세요.",
        bg: "bg-indigo-50",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-500",
    },
    {
        icon: <Smartphone size={20} />,
        title: "언제나 간편하게",
        desc: "스마트폰만 있으면 언제 어디서나 복약 관리가 가능합니다.",
        bg: "bg-yellow-50",
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-500",
    },
    ];

    const FeatureSection = () => {
    return (
        <section id="service" className="py-16 px-4 bg-white">
        <div className="max-w-screen-lg mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
            왜 <span className="text-blue-500">PillLive</span>를 선택해야 할까요?
            </h2>
            <p className="text-gray-500 mb-10">
            복잡한 약 관리는 이제 그만! 우리 가족 모두 쉽게 사용할 수 있는 서비스입니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
                <div
                key={idx}
                className={`rounded-xl ${feature.bg} p-6 text-center shadow hover:shadow-md transition`}
                >
                {/* 아이콘 */}
                <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl ${feature.iconBg} ${feature.iconColor}`}>
                    {feature.icon}
                </div>
                {/* 제목 */}
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                {/* 설명 */}
                <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
};

export default FeatureSection;
