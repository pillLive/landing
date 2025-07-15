import React from "react";

const features = [
    { title: "사진 기반 약 등록", desc: "처방전 / 약봉투를 찍으면 AI가 자동 분석" },
    { title: "복약 알림", desc: "알람 설정으로 잊지 않고 복용" },
    { title: "간단한 복약 인증", desc: "사진으로 복약 인증하기" },
    ];

    const FeaturesSection = () => {
    return (
        <div className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-8">Pill Live 주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default FeaturesSection;
