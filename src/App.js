import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import SubscribeSection from "./components/SubscribeSection";
import Topbar from "./components/Topbar";
import ProcessSection from "./components/ProcessSection";
import TargetSection from "./components/TargetSection";
import ReviewSection from "./components/ReviewSection";
import SupportSection from "./components/SupportSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div>
      <Topbar />
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <TargetSection />
      <ReviewSection />
      <SubscribeSection />
      <SupportSection />
      <FooterSection />
    </div>
  );
}

export default App;
