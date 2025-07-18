import React from "react";

const Topbar = () => {
    return (
        <header className="w-full shadow-sm fixed bg-white z-50">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4 py-3">
            <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-blue-500">PillLive</span>
            <span className="text-sm text-gray-500">복약관리 서비스</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-gray-600 text-sm">
            <a href="#service">서비스 소개</a>
            <a href="#howto">사용법</a>
            <a href="#review">후기</a>
            <a href="#contact">문의하기</a>
            </nav>
            <a
            href="#start"
            className="ml-4 bg-blue-400 text-white text-sm rounded-full px-4 py-2 hover:bg-blue-500"
            >
            시작하기
            </a>
        </div>
        </header>
    );
};

export default Topbar;
