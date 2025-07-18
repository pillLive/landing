import React from "react";

const SupportSection = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-screen-lg mx-auto text-center">
                <p className="text-sm text-gray-500 mb-10">이 서비스는 다음의 지원을 받고 있습니다</p>
                <div className="flex flex-wrap justify-center items-center gap-12">
                <img src="/logo-창업진흥원.jpeg" alt="창업진흥원" className="h-20 object-contain" />
                <img src="/logo-예비창업패키지.png" alt="예비창업패키지" className="h-20 object-contain" />
                <img src="/logo-중소벤처기업부.jpeg" alt="중소벤처기업부" className="h-20 object-contain" />
                <img src="/logo-케이스타트업.jpeg" alt="케이스타트업" className="h-20 object-contain" />
                </div>
            </div>
        </section>  
    );
}

export default SupportSection;

