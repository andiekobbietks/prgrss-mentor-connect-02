
import React, { useState } from "react";
import { HomeCarousel } from "../components/HomeCarousel";
import { HintBox } from "../components/HintBox";
import { ShareFeedbackButton } from "../components/ShareFeedbackButton";

const Home: React.FC = () => {
  const [activeHint, setActiveHint] = useState<string | null>(null);
  
  const handleShareFeedback = () => {
    setActiveHint("feedback");
  };

  return (
    <div className="bg-black min-h-screen">
      <HomeCarousel />
      
      <ShareFeedbackButton onClick={handleShareFeedback} />
      
      {/* Hint Boxes */}
      {activeHint === "messaging" && (
        <HintBox
          title="In-App Messaging"
          description="Keep all communications within the app for your safety. This helps us maintain a secure environment for everyone."
          onClose={() => setActiveHint(null)}
        />
      )}
      
      {activeHint === "safety" && (
        <HintBox
          title="Your Safety Matters"
          description="All profiles are verified. If you have concerns, use our in-app reporting feature to alert our safeguarding team."
          onClose={() => setActiveHint(null)}
        />
      )}
      
      {activeHint === "feedback" && (
        <HintBox
          title="Share Your Thoughts"
          description="Your feedback shapes PRGRSS. Use our in-app form to share your experience and help us improve."
          position="bottom"
          onClose={() => setActiveHint(null)}
        />
      )}
    </div>
  );
};

export default Home;
