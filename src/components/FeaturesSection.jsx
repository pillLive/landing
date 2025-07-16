import React from "react";

const FeaturesSection = () => {
    const features = [
    { title: "사진 기반 약 등록", desc: "처방전 / 약봉투 촬영으로 AI 자동 분석" },
    { title: "복약 알림", desc: "알람 설정으로 잊지 않고 복용" },
    { title: "간단한 복약 인증", desc: "사진으로 복약 인증 가능" },
    ];

    return (
        <>
        {/* Features Section */}
        <section className="bg-gray-50 py-4 px-4 text-center">
        <p className="text-sm text-gray-500 mb-2">누구나 쉽게, 복잡한 설정 없이 시작</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">처방전이나 약봉투만 찍으면 끝!</h2>

            <img src="/pilllive-capture.png" alt="촬영 화면" className="rounded-xl shadow-md mx-auto max-w-sm" />
        </section>

        {/* Alarm Setup Section */}
        <section className="bg-white py-16 px-4 text-center">
        <p className="text-sm text-gray-500 mb-2">내 생활 패턴을 분석한 맞춤 복약시간</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">AI 알람으로 놓치지 않고 챙기기</h2>

        <img src="/pilllive-alarm.png" alt="알람 설정 화면" className="rounded-xl shadow-md mx-auto max-w-sm" />
        </section>

        {/* Dashboard Section */}
        <section className="bg-gray-50 py-16 px-4 text-center">
        <p className="text-sm text-gray-500 mb-2">하루하루 영양 관리가 한눈에</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">쉽고 직관적인 복약 대시보드</h2>

        <img src="/pilllive-dashboard.png" alt="홈 화면" className="rounded-xl shadow-md mx-auto max-w-sm" />
        </section>

        </>
    );
};


export default FeaturesSection;
