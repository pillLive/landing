import React from "react";
import IntroCard from "../card/IntroCard";

const HeroSection = () => {
    return (
        <section className="w-full bg-gradient-to-b pt-8 from-[#e7edf3]/80 to-[#e7f3ef]/80">
        <div className="max-w-screen-lg mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center">
            {/* Left Text */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                <span className="text-blue-500">사진 한장</span>으로 시작하는
                <br />
                <span className="text-emerald-500">개인 복약관리</span>
            </h1>
            <p className="text-gray-600">
                약봉투(처방전) 사진만 찍으면 끝!<br/>가족과 함께하는 스마트한 약 복용 알림 서비스
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2 mt-4">
                <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6 py-3">
                <a href="#contact">무료로 시작하기</a>
                </button>
                <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-full px-6 py-3">
                <a href="#howto">사용법 보기</a>
                </button>
            </div>
            <div className="mt-4 ml-2 flex items-center justify-center md:justify-start text-sm text-gray-500">
                <div className="flex -space-x-1 mr-2">
                <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                </div>
                1,000+ 가족들이 함께 사용 중
            </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
                <IntroCard />
            </div>
        </div>
        </section>
    );
};

export default HeroSection;
