import { Settings, Home as HomeIcon, Users, Calendar } from "lucide-react";
import React from "react";
import { TourProvider } from "@/contexts/TourContext";
import { HintContent } from "@/components/HintContent";

const Index = () => {
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
    <TourProvider>
      <div className="min-h-screen bg-background text-foreground relative">
        {/* Logo and Settings */}
        <div className="flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold tracking-wider">PRGRSS</h1>
          <Settings className="w-6 h-6" />
        </div>

        {/* Cards Container */}
        <div className="px-4 space-y-4">
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
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-muted p-4">
          <div className="flex justify-between items-center max-w-md mx-auto">
            <HomeIcon className="w-6 h-6 text-accent" />
            <Users className="w-6 h-6 text-muted-foreground" />
            <div className="w-6 h-6 rounded-full bg-muted-foreground" />
            <Calendar className="w-6 h-6 text-muted-foreground" />
          </div>
        </nav>

        {/* Tour Content */}
        <HintContent />
      </div>
    </TourProvider>
  );
};

export default Index;
