import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import SubscribeSection from "../components/SubscribeSection";
import Topbar from "../components/Topbar";
import ProcessSection from "../components/ProcessSection";
import TargetSection from "../components/TargetSection";
import ReviewSection from "../components/ReviewSection";
import FooterSection from "../components/FooterSection";

const Home = () => {
    return (
        <div>
            <Topbar />
            <HeroSection />
            <FeaturesSection />
            <ProcessSection />
            <TargetSection />
            <ReviewSection />
            <SubscribeSection />
            <FooterSection />
        </div>
    );
};

export default Home;

