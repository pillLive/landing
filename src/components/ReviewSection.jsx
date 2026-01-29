import React from "react";
import { Eye, Shield, Users, ChevronLeft, ChevronRight } from "lucide-react";

const features = [
    {
        icon: <Eye className="w-6 h-6 text-[#E89F8F]" />,
        title: "0%의 번거로움",
        description: "기록은 저희가 할께요, 당신은 쉬세요! 약 이름을 하나하나 입력할 필요 없습니다. 처방전이나 약 봉투를 찍기만 하면 AI가 복용 시간부터 횟수까지 완벽하게 일정을 정리해 드립니다."
    },
    {
        icon: <Shield className="w-6 h-6 text-[#E89F8F]" />,
        title: "100%의 안심",
        description: "혹시 모를 위험까지 AI가 지켜봐요! 내가 먹는 모든 약을 AI가 24시간 분석합니다. 함께 먹으면 안 되는 약이나 주의해야 할 음식까지 실시간으로 알려주니 안심하세요."
    },
    {
        icon: <Users className="w-6 h-6 text-[#E89F8F]" />,
        title: "무한대의 연결",
        description: "혼자가 아니라 함께해서 더 든든해요! '우리약통'을 통해 소중한 사람과 마음을 나눠요. 함께 챙겨주는 마음이 모여 혼자서는 어려웠던 건강한 습관이 완성됩니다."
    }
];

const ReviewSection = () => {
    return (
        <section id="review" className="py-16 px-4 bg-[#FCF8F6]">
            <div className="max-w-screen-xl mx-auto">
                {/* Header */}
                <div className="flex items-start justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                            필라이브가 만드는 3가지 변화
                        </h2>
                        <p className="text-gray-600 text-sm">
                            The sophisticated architecture behind every interaction.
                        </p>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
                            {/* Icon */}
                            <div className="w-12 h-12 bg-[#F7E7E0] rounded-lg flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                {feature.title}
                            </h3>
                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
