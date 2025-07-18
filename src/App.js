import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import SubscribeSection from "./components/SubscribeSection";
import Topbar from "./components/Topbar";
import ProcessSection from "./components/ProcessSection";
import TargetSection from "./components/TargetSection";
import ReviewSection from "./components/ReviewSection";

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
    </div>
  );
}

export default App;
