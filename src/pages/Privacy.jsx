import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Topbar from "../components/Topbar";
import FooterSection from "../components/FooterSection";

const Privacy = () => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch("/md/privacy.md")
            .then((res) => res.text())
            .then((text) => setMarkdown(text))
            .catch((err) => console.error("마크다운 파일을 불러오는데 실패했습니다:", err));
    }, []);

    return (
        <div>
            <Topbar />
            <div className="min-h-screen bg-gray-50 py-20 px-4 pt-24">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
                    <div className="markdown-content">
                        <ReactMarkdown>{markdown}</ReactMarkdown>
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    );
};

export default Privacy;

