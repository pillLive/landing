import React, { useState } from "react";
import { Play } from "lucide-react";

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="w-full bg-[#FCF8F6] pt-24 pb-20">
            <div className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
                {/* Left Text Content */}
                <div className="w-full md:pl-20 text-left space-y-6">
                    {/* Tag */}
                    <div className="inline-block">
                        <span className="bg-[#F7E7E0] text-[#E89F8F] text-sm px-3 py-1 rounded-full">
                            나의 복약 관리 동반자
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                        시간을 놓치면,<br/>약효도 놓치니까.
                        <br />
                        <span className="pt-1 text-[#E89F8F]">당신의 회복을<br/>설계합니다.</span>
                    </h1>

                    {/* Description */}
                    {/* Mobile Version */}
                    <p className="text-gray-700 text-lg leading-relaxed block md:hidden">
                        병원 다녀온 뒤, 약 챙겨 먹는 게 세상에서<br/>제일 귀찮으셨죠? 이제 걱정 마세요. <br/>필라이브가 당신의 약 먹는 시간을 세상에서<br/>가장 똑똑하고 다정하게 챙겨드릴게요.
                    </p>
                    {/* PC Version */}
                    <p className="text-gray-700 text-lg leading-relaxed hidden md:block">
                        병원 다녀온 뒤, 약 챙겨 먹는 게 세상에서 제일 귀찮으셨죠?<br/>이제 걱정 마세요. 필라이브가 당신의 약 먹는 시간을<br/>세상에서 가장 똑똑하고 다정하게 챙겨드릴게요.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-10 pt-4">
                        <a
                            href="#contact"
                            className="bg-[#E89F8F] hover:bg-[#D88F7F] text-white text-base font-medium rounded-full px-8 py-3 transition-colors"
                        >
                            지금 시작하기
                        </a>
                        <a
                            href="#howto"
                            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-base font-medium"
                        >
                            <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center">
                                <Play className="h-3 w-3 text-black ml-0.5" />
                            </div>
                            사용법 보기
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div 
                    className="w-full flex justify-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img
                        src={isHovered ? "/hover_true.webp" : "/hover_false.webp"}
                        alt="PillLive medication analysis"
                        className="w-full max-w-lg transition-opacity duration-300"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
