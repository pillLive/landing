import React, { useState } from "react";

const SubscribeSection = () => {
    const [contact, setContact] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!contact) return;
    
        try {
            const res = await fetch("https://api.deckst.me/v1/slack/pilllive-notify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contact }),
            });
    
            if (res.ok) {
                alert("신청 완료! 출시 시 연락드리겠습니다.");
                setContact("");
            } else {
                const error = await res.json();
                alert(`신청 실패: ${error.message || "다시 시도해주세요."}`);
            }
        } catch (err) {
            console.error(err);
            alert("네트워크 오류: 다시 시도해주세요.");
        }
    };

    return (
        <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">출시 알림 신청</h2>
        <p className="text-sm text-gray-500 mb-8">이메일 또는 전화번호를 남겨주세요.</p>
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-wrap gap-2">
            <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="example@email.com"
            className="w-64 px-4 py-3 rounded-full border border-gray-300 shadow-sm focus:ring-pillblue-dark focus:ring-2 focus:outline-none"
            required
            />
            <button
            type="submit"
            className="bg-indigo-500 text-white rounded-full px-6 py-3 font-medium hover:bg-indigo-600 transition"
            >
            알림 신청
            </button>
        </form>
        </section>
    );
};

export default SubscribeSection;
