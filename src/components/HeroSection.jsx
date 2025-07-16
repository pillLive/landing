import React from "react";

const HeroSection = () => {
    return (
        <section className="text-center py-20 px-4 bg-white">
            <p className="text-sm text-gray-500 mb-2">약 먹는 시간 또 깜빡했나요?</p>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8">
                AI와 함께하는{' '}
                <span className="text-indigo-500">스마트 복약관리</span>
            </h1>
            <img src="/pilllive-appicon.png" alt="Pill Live App Icon" className="mx-auto w-24 h-24 mb-10" />
            <button className="bg-indigo-500 text-white rounded-full px-6 py-3 font-medium hover:bg-indigo-600 transition">
            똑똑한 복약 시작하기
            </button>
        </section>
    );
};


export default HeroSection;
