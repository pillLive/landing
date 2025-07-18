const reviews = [
    {
    name: "이○○님",
    age: "48세",
    job: "주부",
    text: "처방전 사진만 찍으면 너무 편해요. 예전에는 약 이름 하나하나 입력하느라 힘들었는데, 이제는 30초면 끝나요!",
    },
    {
    name: "박○○님",
    age: "42세",
    job: "회사원",
    text: "어머니 약 관리가 걱정이었는데, 이 앱으로 서로 확인할 수 있어서 안심이에요. 멀리 살아도 챙길 수 있어 좋습니다.",
    },
    {
    name: "최○○님",
    age: "55세",
    job: "주부",
    text: "글씨가 크고 버튼이 커서 사용하기 편해요. 스마트폰 잘 못 다루는 저도 금방 익숙해졌습니다!",
    },
    {
    name: "김○○님",
    age: "49세",
    job: "간호사",
    text: "남편이랑 함께 사용하니까 서로 약 먹었는지 확인할 수 있어요. 이제 깜빡하는 일이 없어졌어요.",
    },
    {
    name: "정○○님",
    age: "53세",
    job: "자영업",
    text: "약 먹는 기록이 남아서 병원에 갈 때 의사 선생님께 보여드릴 수 있어 편해요. 정말 실용적이에요.",
    },
    {
    name: "안○○님",
    age: "46세",
    job: "교사",
    text: "복약 통계를 보니 내가 얼마나 잘 챙기고 있는지 한눈에 알 수 있어요. 건강관리에 도움 많이 됩니다.",
    },
];

const ReviewSection = () => {
    return (
    <section id="review" className="py-16 px-4 bg-blue-50">
        <div className="max-w-screen-lg mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-blue-500">실제 사용자 후기</span>
        </h2>
        <p className="text-sm text-gray-500">약속시간을 사용하고 계신 분들의 진솔한 이야기를 들어보세요</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
        {reviews.map((r, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition text-left">
            <div className="flex text-yellow-400 mb-2">
                {Array(5).fill(0).map((_, i) => (
                <span key={i}>★</span>
                ))}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">"{r.text}"</p>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-lg">🙂</div>
                <div className="text-sm text-gray-800 font-semibold">{r.name}</div>
                <div className="text-xs text-gray-500">{r.age}, {r.job}</div>
            </div>
            </div>
        ))}
        </div>
    </section>
    );
};

export default ReviewSection;
