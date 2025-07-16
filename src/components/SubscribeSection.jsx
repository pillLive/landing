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
        <div className="py-12 px-4 text-center">
        <h2 className="text-xl font-semibold mb-4">출시 알림 신청</h2>
        <p className="text-gray-500 mb-4">이메일 또는 전화번호를 남겨주세요.</p>
        <form onSubmit={handleSubmit} className="flex justify-center gap-2 flex-wrap">
            <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="example@email.com or 010-xxxx-xxxx"
            className="border rounded px-4 py-2 w-64"
            required
            />
            <button type="submit" className="bg-emerald-500 text-white rounded px-4 py-2 hover:bg-emerald-600">
            알림 신청
            </button>
        </form>
        </div>
    );
};

export default SubscribeSection;
