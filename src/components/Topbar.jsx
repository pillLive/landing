import React, { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

const Topbar = () => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    return (
        <header className="w-full fixed bg-[#FCF8F6] z-50">
            <div className="max-w-screen-xl mx-auto px-6 py-4">
                <div className="bg-white/70 rounded-full flex justify-between items-center px-6 py-3">
                    {/* Logo */}
                    <div 
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center space-x-2 cursor-pointer"
                    >
                        <img 
                            src="/appstore.png" 
                            alt="PILLLIVE" 
                            className="w-8 h-8 rounded"
                        />
                        <span className="text-lg font-semibold text-gray-800 uppercase tracking-tight">
                            PILLLIVE
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-8 text-gray-700 text-sm">
                        <a href="#service" className="hover:text-gray-900">서비스 소개</a>
                        <a href="#howto" className="hover:text-gray-900">사용법</a>
                        <a href="#review" className="hover:text-gray-900">후기</a>
                        <a href="#install" className="hover:text-gray-900">설치</a>
                    </nav>

                    {/* Right Side: Language Selector & Get Started Button */}
                    <div className="flex items-center space-x-4">
                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                className="flex items-center space-x-1 text-gray-700 text-sm hover:text-gray-900"
                            >
                                <Globe className="h-5 w-5" />
                                <span>KO</span>
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Get Started Button */}
                        <a
                            href="https://onelink.to/629vzn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white text-sm rounded-3xl px-5 py-2 hover:bg-gray-900 transition-colors"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
