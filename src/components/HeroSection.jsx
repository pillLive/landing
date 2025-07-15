import React from "react";

const HeroSection = () => {
    return (
        <div className="bg-emerald-500 text-white text-center py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
            영양제·복용약 관리, Pill Live로 간편하게!
        </h1>
        <p className="text-lg md:text-xl mb-6">
            까먹기 쉬운 40~50대 여성 / 바쁜 직장인을 위한 복약 관리 서비스
        </p>
        <button className="bg-white text-emerald-500 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition">
            앱 출시 시 알림 받기
        </button>
        </div>
    );
};

export default HeroSection;
