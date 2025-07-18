import React from "react";
import { Camera, Bell, Users } from "lucide-react"; // lucide-react 아이콘 사용 예시

const IntroCard = () => {
    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <div className="text-center">
            <h3 className="text-blue-500 font-bold text-lg">PillLive</h3>
            <p className="text-gray-500 text-sm">복약 관리 서비스</p>
        </div>
        <div className="space-y-3">
            <div className="flex items-center space-x-3 bg-blue-50 rounded-lg p-3">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">
                <Camera size={16} className="text-gray-700" />
            </div>
            <div>
                <p className="font-medium text-sm">처방전 촬영</p>
                <p className="text-gray-500 text-xs">간편하게 사진만</p>
            </div>
            </div>
            <div className="flex items-center space-x-3 bg-green-50 rounded-lg p-3">
            <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                <Bell size={16} className="text-gray-700" />
            </div>
            <div>
                <p className="font-medium text-sm">복용 알림</p>
                <p className="text-gray-500 text-xs">정시에 알려드려요</p>
            </div>
            </div>
            <div className="flex items-center space-x-3 bg-orange-50 rounded-lg p-3">
            <div className="w-8 h-8 flex items-center justify-center bg-orange-100 rounded-full">
                <Users size={16} className="text-gray-700" />
            </div>
            <div>
                <p className="font-medium text-sm">가족 연동</p>
                <p className="text-gray-500 text-xs">함께 관리해요</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default IntroCard;
