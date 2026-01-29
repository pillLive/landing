import React from "react";

const steps = [
    {
        image: "/feature-1.webp",
        title: "1초만에 끝내는 일정 등록",
        desc: "복잡한 약 이름? 몰라도 괜찮아요.\n사진 한 장만 찍으면 AI가 몇 시에 먹어야\n하는지 자동으로 다 알려주니까요"
    },
    {
        image: "/feature-2.webp",
        title: "마음을 연결하는 \"우리약통\"",
        desc: "멀리 사는 부모님, 바쁜 남편... 약은 잘 먹었나\n걱정되시죠? '우리약통'으로 연결하면\n서로의 복약 현황을 실시간으로 확인하고\n응원할 수 있어요."
    },
    {
        image: "/feature-3.webp",
        title: "당신을 아는 \"AI 케어챗\"",
        desc: "빈속에 먹어도 되나? 커피랑 같이 먹어도 되나?\n헷갈릴 땐 AI케어챗에게 물어보세요.\n내 약 정보를 다 알고 있으니까\n딱 맞는 답을 해줄 거예요."
    },
];

const ProcessSection = () => {
    return (
        <section id="howto" className="py-16 px-4 bg-[#FCF8F6]">
            <div className="max-w-screen-xl mx-auto text-center">
                {/* Tag */}
                <div className="mb-4">
                    <span className="bg-[#F7E7E0] text-[#E89F8F] text-sm px-3 py-1 rounded-full">
                        THE PILLLIVE EXPERIENCE
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    필라이브가 건강을 설계하는<br className="md:hidden" />3가지 방법
                </h2>

                {/* Subtitle */}
                <p className="text-gray-700 mb-12 text-lg">
                    복잡했던 복약 관리가 세상에서 가장 쉬운<br className="md:hidden" />'안심 케어'로 바뀝니다.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-sm">
                            {/* Image */}
                            <div className="mb-6 w-full">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed text-center whitespace-pre-line">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
