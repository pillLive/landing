import React from "react";
import { Link } from "react-router-dom";

const FooterSection = () => {
    return (
        <footer className="bg-gray-50 py-6 border-t border-gray-200">
        <div className="max-w-screen-lg mx-auto px-4 text-center">
            <p className="text-sm text-gray-500 mb-2">© 2025 PillLive. All rights reserved.</p>
            <p className="text-xs text-gray-400 mb-2">
            문의: pilllive.official@gmail.com
            </p>
            <div className="flex justify-center gap-4 mt-3">
                <Link 
                    to="/privacy" 
                    className="text-xs text-gray-400 hover:text-gray-600 underline"
                >
                    개인정보 처리방침
                </Link>
                <Link 
                    to="/terms" 
                    className="text-xs text-gray-400 hover:text-gray-600 underline"
                >
                    이용약관
                </Link>
            </div>
        </div>
        </footer>
    );
};

export default FooterSection;
