import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
    return (
        <footer className="bg-[#FCF8F6] py-8 border-t border-gray-200">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left - Logo */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <div className="flex items-center space-x-2">
                            <img 
                                src="/appstore.png" 
                                alt="PILLLIVE" 
                                className="w-8 h-8 rounded"
                            />
                            <span className="text-lg font-semibold text-gray-800 uppercase tracking-tight">
                                PILLLIVE
                            </span>
                        </div>
                    </div>

                    {/* Center - Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                        <Link 
                            to="/privacy" 
                            className="hover:text-gray-900"
                        >
                            개인정보 처리방침
                        </Link>
                        <Link 
                            to="/terms" 
                            className="hover:text-gray-900"
                        >
                            이용약관
                        </Link>
                    </div>

                    {/* Right - Copyright */}
                    <div className="text-sm text-gray-600">
                        © 2025 TIVIA, Inc.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
