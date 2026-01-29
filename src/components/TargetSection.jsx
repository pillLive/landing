import React from "react";
import { Quote, Star, Smile } from "lucide-react";

const reviews = [
    {
        image: "/user-1.png",
        name: "최민정 님",
        role: "12년째 고혈압 관리 중인 어머님을 둔 딸",
        text: "지병이 있는 부모님께 매일 '약 드셨냐'고 여쭤보는 게 어느덧 서로에게 잔소리처럼 느껴져 속상했어요... 그런데 필라이브를 깔아드린 뒤론 제 폰으로 부모님의 복약 여부를 실시간으로 확인할 수 있어 정말 마음이 놓여요. 가끔 약 드신 걸 확인하면 응원의 하트를 보내는데, 엄마도 제가 챙겨주는 기분이 든다며 좋아하시네요.\n우리 가족의 다정한 소통 창구가 생겼습니다 :)",
        icon: "quote",
    },
    {
        image: "/user-2.png",
        name: "임서윤님",
        role: "예비 부모",
        text: "아이를 가질 준비를 시작하며 엽산을 매일 챙겨\n먹는 게 숙제였는데, 바쁜 일상 속에서 자꾸\n깜빡하더라고요. 필라이브 덕분에 남편과 제가\n서로의 복약 스케줄을 함께 체크하며\n한 번도 거르지 않고 챙겨 먹고 있어요!",
        icon: "smile",
    },
    {
        image: "/user-3.png",
        name: "강진호 님",
        role: "",
        text: "몸 챙기겠다고 영양제는 가득 샀지만, 등록하기가\n너무 귀찮아 늘 작심삼일이었죠. 요즘은 매일 연\n속 복약 기록을 쌓는 재미에 푹 빠졌습니다.",
        icon: "star",
    },
];

const TargetSection = () => {
    return (
        <section id="target" className="py-16 px-4 bg-[#FCF8F6]">
            <div className="max-w-screen-xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* Tag */}
                    <div className="mb-4">
                        <span className="text-[#E89F8F] text-sm font-semibold">
                            HEARTFELT STORIES
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        필라이브와 함께하는 <br className="md:hidden" />기분 좋은 복약
                    </h2>

                    {/* Subtitle */}
                    <p className="text-gray-700 text-lg leading-relaxed">
                    약을 챙겨먹는 불안함은 덜어내고, 나와 가족의 안심으로 채운 분들의 진짜 이야기 입니다.
                    </p>
                </div>

                {/* Review Cards Grid - 2x2 */}
                <div className="space-y-6 mb-16">
                    {/* First Row - Left larger, Right smaller */}
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
                        {/* Card 1 - 최민정 님 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6 relative">
                            {/* Left - Large Avatar (Centered) */}
                            <div className="flex items-center justify-center flex-shrink-0 md:w-auto w-full">
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-xl flex items-center justify-center overflow-hidden bg-green-100">
                                    <img 
                                        src={reviews[0].image} 
                                        alt={reviews[0].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            {/* Right - Content */}
                            <div className="flex flex-col flex-1 md:ml-2">
                                {/* Quote Icon */}
                                <Quote className="w-4 h-4 text-[#E89F8F] mb-4" />
                                {/* Review Text */}
                                <p className="text-gray-900 leading-relaxed mb-6 flex-grow whitespace-pre-line">
                                    {reviews[0].text}
                                </p>
                                {/* User Info */}
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">{reviews[0].name}</p>
                                    <p className="text-sm text-gray-600">{reviews[0].role}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - 임서윤님 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
                            {/* Top - Emoji Icon */}
                            <div className="mb-4">
                                <div className="w-4 h-4 rounded-full flex items-center justify-center mt-3">
                                    <Smile className="w-6 h-6 text-[#E89F8F]" />
                                </div>
                            </div>
                            {/* Review Text */}
                            <p className="text-gray-900 leading-relaxed mb-6 flex-grow whitespace-pre-line">
                                {reviews[1].text}
                            </p>
                            {/* User Profile - Bottom */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img 
                                        src={reviews[1].image} 
                                        alt={reviews[1].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">{reviews[1].name}</p>
                                    <p className="text-sm text-gray-600">{reviews[1].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row - Equal width */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
                        {/* Card 3 - 강진호 님 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
                            {/* Star Rating */}
                            <div className="flex items-center gap-2 mb-4">
                                {Array(5).fill(0).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-[#E89F8F] fill-none" />
                                ))}
                            </div>
                            {/* Review Text */}
                            <p className="text-gray-900 leading-relaxed mb-6 flex-grow whitespace-pre-line">
                                {reviews[2].text}
                            </p>
                            {/* User Profile */}
                            <div className="flex items-center gap-3">
                                <img 
                                    src={reviews[2].image} 
                                    alt={reviews[2].name}
                                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                                />
                                <p className="font-bold text-gray-900">{reviews[2].name}</p>
                            </div>
                        </div>

                        {/* Card 4 - Summary Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col text-left">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                12,000명이 넘는 사용자의 <span className="text-gray-800">'마음 편한 이야기'</span>
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                매일매일 수많은 사용자가 병원에서 느꼈던 걱정을 필라이브와 함께 '안심'으로 바꾸고 있어요. 약을 챙겨 먹는 모든 순간이 당신에게 더 따뜻하고 평온한 시간이 될 수 있도록 필라이브가 함께 합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetSection;
