
import React from "react";
import { Settings, Home as HomeIcon, Users, Calendar, Info, MessageCircle } from "lucide-react";
import { useTour } from "@/contexts/TourContext";
import { TourTarget } from "@/components/TourTarget";
import { TourOverlay } from "@/components/TourOverlay";
import { HintTrigger } from "@/components/HintTrigger";

const Index = () => {
  const { startTour } = useTour();
  
  const cardData = [
    {
      title: "PARTNER",
      subtitle: "ZEBRA",
      description: "Zebra is a world leader in innovative digital solutions, hardware and softwar...",
      image: "/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
    },
    {
      publisher: "GPE",
      title: "HOW TO BE A GOOD MENTEE",
      description: "Maximize your mentoring journey! Learn how to be proactive, open to feedback, and respectful, while building strong connections and achieving your professional goals.",
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Logo and Settings */}
      <div className="flex justify-between items-center p-6">
        <TourTarget id="welcome-logo" className="flex items-center">
          <h1 className="text-2xl font-bold tracking-wider">PRGRSS</h1>
          <HintTrigger stepId="welcome" className="ml-2" />
        </TourTarget>
        <Settings className="w-6 h-6" />
      </div>

      {/* Cards Container */}
      <div className="px-4 space-y-4">
        {/* Call Information Card with Hint */}
        <TourTarget id="calls-info" className="relative overflow-hidden rounded-xl bg-card p-6">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold">Micro-Mentorship Calls</h2>
            <HintTrigger stepId="calls" />
          </div>
          <p className="text-sm opacity-80">All sessions are exactly 12 minutes with buffer time before and after.</p>
        </TourTarget>

        {/* Safety Information */}
        <TourTarget id="safety-info" className="relative overflow-hidden rounded-xl bg-card p-6">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold">Safety &amp; Privacy</h2>
            <HintTrigger stepId="safety" />
          </div>
          <p className="text-sm opacity-80">All profiles are verified. Use our in-app reporting for any concerns.</p>
        </TourTarget>

        {/* Regular content cards */}
        {cardData.map((card, index) => (
          <div 
            key={index}
            className="relative overflow-hidden rounded-xl bg-card p-6"
          >
            {card.publisher && (
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                <div>
                  <p className="text-sm opacity-70">PUBLISHED BY</p>
                  <p className="text-accent">{card.publisher}</p>
                </div>
              </div>
            )}
            {card.title && (
              <>
                {card.subtitle && (
                  <p className="text-accent mb-2">
                    {card.subtitle}
                  </p>
                )}
                <h2 className="text-xl font-bold mb-2">
                  {card.title}
                </h2>
              </>
            )}
            <p className="text-sm opacity-80">
              {card.description}
            </p>
            <button 
              className="absolute bottom-4 right-4 bg-secondary/30 p-2 rounded-full"
              aria-label="Learn more"
            >
              <span className="text-accent">→</span>
            </button>
          </div>
        ))}

        {/* Feedback Button */}
        <TourTarget id="feedback-button" className="mt-8 mb-16 flex justify-center">
          <button className="bg-accent text-white px-5 py-2 rounded-full flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span>Share feedback</span>
          </button>
        </TourTarget>
      </div>

      {/* Bottom Navigation */}
      <TourTarget id="navigation-tabs" className="fixed bottom-0 left-0 right-0 bg-background border-t border-muted p-4">
        <nav className="flex justify-between items-center max-w-md mx-auto">
          <HomeIcon className="w-6 h-6 text-accent" />
          <TourTarget id="profile-icon">
            <Users className="w-6 h-6 text-muted-foreground" />
          </TourTarget>
          <div className="w-6 h-6 rounded-full bg-muted-foreground" />
          <TourTarget id="messaging-icon">
            <MessageCircle className="w-6 h-6 text-muted-foreground" />
          </TourTarget>
        </nav>
      </TourTarget>

      {/* Tour Overlay - will only show when tour is active */}
      <TourOverlay />
    </div>
  );
};

export default Index;
