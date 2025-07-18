import React, { useState } from "react";
import { Apple, Smartphone, Gift, X } from "lucide-react";

const SubscribeSection = () => {
    const [contact, setContact] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

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
                alert("신청 완료! 업데이트 시 연락드리겠습니다.");
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
        <section id="contact" className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">지금 바로 시작하세요!</h2>
        <p className="text-gray-500 mb-6">
            가족과 함께하는 스마트한 복약관리, PillLive로 건강한 일상을 만들어보세요
        </p>
    
        <div className="flex justify-center gap-4 flex-wrap mb-4">
            <button
            onClick={handleClick}
            className="flex items-center gap-2 border rounded-full px-6 py-2 shadow-sm hover:shadow-md transition bg-white text-blue-500 font-semibold"
            >
            <Apple size={18} /> App Store
            </button>
            <button
            onClick={handleClick}
            className="flex items-center gap-2 border rounded-full px-6 py-2 shadow-sm hover:shadow-md transition bg-white text-blue-500 font-semibold"
            >
            <Smartphone size={18} /> Google Play
            </button>
        </div>
    
        <div className="flex justify-center items-center text-sm text-gray-500 gap-1">
            <Gift size={14} /> 지금 가입하면 <span className="font-bold text-gray-700">프리미엄 기능 30일 무료!</span>
        </div>
    
        {/* ✅ 모달 */}
        {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
                <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-black"
                >
                <X size={20} />
                </button>
                <h3 className="text-lg font-bold mb-2">알림 신청</h3>
                <p className="text-sm text-gray-600 mb-4">
                현재 기능 고도화 중입니다. 이메일 또는 전화번호를 남겨주시면 출시 시 바로 알려드리겠습니다.
                </p>
                <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
                <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="이메일 또는 전화번호"
                    className="border rounded px-4 py-2 w-full"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
                >
                    신청하기
                </button>
                </form>
            </div>
            </div>
        )}
        </section>
    );
};

export default SubscribeSection;
