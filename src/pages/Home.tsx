
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeCarousel } from "../components/HomeCarousel";
import { HintBox } from "../components/HintBox";
import { ShareFeedbackButton } from "../components/ShareFeedbackButton";
import { TourTarget } from "@/components/TourTarget";
import { useTour } from "@/contexts/TourContext";
import { MessageSquare, Calendar, User, Info, BookOpen, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeHint, setActiveHint] = useState<string | null>(null);
  const { isFirstVisit, startTour } = useTour();
  
  const handleShareFeedback = () => {
    setActiveHint("feedback");
  };

  const handleMessageClick = () => {
    setActiveHint("messaging");
  };

  const handleSafetyClick = () => {
    setActiveHint("safety");
  };

  const handleReverseMentorshipClick = () => {
    setActiveHint("reverse-mentorship");
    setTimeout(() => {
      navigate('/call-library');
    }, 3000);
  };

  return (
    <div className="bg-black min-h-screen pb-20">
      <HomeCarousel />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="px-4 space-y-4 mt-4"
      >
        {/* Call Information Card with Hint */}
        <TourTarget id="calls-info" className="relative overflow-hidden rounded-xl bg-card p-6">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold">Micro-Mentorship Calls</h2>
            <button onClick={startTour} className="text-accent">
              <Info className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm opacity-80">All sessions are exactly 12 minutes with buffer time before and after.</p>
          <div className="mt-3 flex gap-2">
            <Calendar className="h-4 w-4 text-accent" />
            <span className="text-xs text-accent">Limited to 3 calls/month for mentors, 2 for mentees</span>
          </div>
        </TourTarget>

        {/* Messaging Information with Hint */}
        <TourTarget id="messaging-icon" className="relative overflow-hidden rounded-xl bg-card p-6">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold">Messaging System</h2>
            <button onClick={handleMessageClick} className="text-accent">
              <Info className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm opacity-80">Messaging requires booking a call first. Limits vary based on call status.</p>
          <div className="mt-3 flex gap-2">
            <MessageSquare className="h-4 w-4 text-accent" />
            <span className="text-xs text-accent">After completed call: 5 msgs/day. Scheduled call: 3 msgs/day</span>
          </div>
        </TourTarget>

        {/* Reverse Mentorship Card */}
        <TourTarget id="reverse-mentorship" className="relative overflow-hidden rounded-xl bg-card p-6">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-accent" />
              Reverse Mentorship
            </h2>
            <button onClick={handleReverseMentorshipClick} className="text-accent">
              <Info className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm opacity-80">
            Nearly 70% of Gen Z and millennial workers believe mentoring should be a two-way street.
          </p>
          <div className="mt-3 flex gap-2">
            <BookOpen className="h-4 w-4 text-accent" />
            <span className="text-xs text-accent">
              Learn more in the Call Library and Learning Academy
            </span>
          </div>
        </TourTarget>

        {/* Safety Information */}
        <TourTarget id="safety-info" className="relative overflow-hidden rounded-xl bg-card p-6">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold">Safety &amp; Privacy</h2>
            <button onClick={handleSafetyClick} className="text-accent">
              <Info className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm opacity-80">All profiles are verified. Use our in-app reporting for any concerns.</p>
          <div className="mt-3 flex gap-2">
            <User className="h-4 w-4 text-accent" />
            <span className="text-xs text-accent">No-shows: Mentors blocked after 2, mentees after 1</span>
          </div>
        </TourTarget>
      
        {/* Navigation Buttons */}
        <ShareFeedbackButton onClick={handleShareFeedback} />
      </motion.div>
      
      {/* Hint Boxes */}
      {activeHint === "messaging" && (
        <HintBox
          title="Messaging System Rules"
          description="Messaging works like LinkedIn connections - you need to book a call first. After completing a call, you get 5 messages/day for 3 days. With upcoming calls, you get 3 messages/day. Without calls, mentors get 1 message/day, mentees get 3 if the mentor messaged first."
          onClose={() => setActiveHint(null)}
        />
      )}
      
      {activeHint === "safety" && (
        <HintBox
          title="Your Safety Matters"
          description="All profiles are verified. Strict no-show policies apply: mentors with 2 no-shows in 30 days are blocked for 30 days, mentees with 1 no-show in 60 days are blocked for 60 days."
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

      {activeHint === "reverse-mentorship" && (
        <HintBox
          title="Reverse Mentorship"
          description="Younger professionals share knowledge with senior leaders, especially in technology and culture. This two-way mentorship creates stronger teams and helps bridge generational gaps. Redirecting you to the Call Library..."
          position="bottom"
          onClose={() => setActiveHint(null)}
        />
      )}
    </div>
  );
};

export default Home;
