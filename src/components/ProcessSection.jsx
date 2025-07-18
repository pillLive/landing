import React from "react";
import { Camera, Bell, Users } from "lucide-react";

const steps = [
    {
        icon: <Camera size={20} />,
        title: "사진 촬영",
        desc: "처방전이나 약봉지 사진을 찍어주세요.\nAI가 자동으로 인식합니다.",
        image : "/pilllive-capture.png"
    },
    {
        icon: <Bell size={20} />,
        title: "알림 설정",
        desc: "복용 시간과 횟수를 설정하세요.\n생활 패턴에 맞게 조절 가능.",
        image : "/pilllive-alarm.png"
    },
    {
        icon: <Users size={20} />,
        title: "가족 연동",
        desc: "가족과 복약 상황을 공유하고 챙겨주세요.\n서로의 건강을 함께 관리해요.",
        image : "/pilllive-dashboard.png"
    },
    ];

const ProcessSection = () => {
    return (
        <section id="howto" className="py-16 px-4 bg-gray-50">
        <div className="max-w-screen-lg mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-blue-500">3단계</span>로 완성하는 복약관리
            </h2>
            <p className="text-gray-500 mb-10">
            복잡한 설정은 필요 없어요. 간단한 3단계로 시작하세요!
            </p>
    
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-4">
            {steps.map((step, idx) => (
                <div
                key={idx}
                className={`flex flex-col items-center bg-white rounded-xl shadow-sm p-6 border w-full md:w-1/3
                    animate-[pulseOnce_1.5s_ease-in-out_infinite]
                    ${idx === 0 ? 'animation-delay-[0ms]' : ''}
                    ${idx === 1 ? 'animation-delay-[500ms]' : ''}
                    ${idx === 2 ? 'animation-delay-[1000ms]' : ''}
                `}
                >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                    {step.icon}
                </div>
                <h3 className="font-bold text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 mb-4 whitespace-pre-line">{step.desc}</p>
                {/* 이미지 */}
                <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-md max-h-80 w-full object-contain"
                />
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default ProcessSection;
