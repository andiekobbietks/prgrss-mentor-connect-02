import React from "react";
import { ChevronRight, User } from "lucide-react";

interface CarouselCardProps {
  logo?: string;
  title: string;
  description: string;
  badge?: string;
  publisher?: {
    name: string;
    avatar?: string;
  };
  backgroundImage?: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ 
  logo, 
  title, 
  description, 
  badge, 
  publisher,
  backgroundImage
}) => {
  return (
    <div className="relative rounded-3xl overflow-hidden mb-4 w-full min-h-[200px]">
      {backgroundImage && (
        <div className="absolute inset-0">
          <img 
            src={backgroundImage} 
            className="w-full h-full object-cover"
            alt={title}
          />
          <div className="absolute inset-0 card-overlay" />
        </div>
      )}

      <div className="relative p-6 flex flex-col h-full justify-between">
        <div>
          {logo && (
            <div className="mb-2">
              <img src={logo} alt="Logo" className="h-8" />
            </div>
          )}
          
          {badge && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent text-sm font-medium">{badge}</span>
              <span className="text-accent">{title}</span>
            </div>
          )}

          {publisher && (
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                {publisher.avatar ? (
                  <img src={publisher.avatar} alt={publisher.name} className="w-full h-full rounded-full" />
                ) : (
                  <User className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase">PUBLISHED BY</p>
                <p className="text-accent">{publisher.name}</p>
              </div>
            </div>
          )}
        </div>

        <div>
          {!badge && <h3 className="text-2xl font-bold mb-2">{title}</h3>}
          <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
          
          <div className="flex justify-end">
            <button className="p-3 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HomeCarousel: React.FC = () => {
  return (
    <div className="px-4 py-6 space-y-4">
      <CarouselCard
        logo="/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
        title="ZEBRA"
        description="Zebra is a world leader in innovative digital solutions, hardware and software."
        badge="PARTNER"
        backgroundImage="/lovable-uploads/25592c32-e5be-443a-a77f-dba237cf6573.png"
      />
      
      <CarouselCard
        title="HOW TO BE A GOOD MENTOR"
        description="Empower your mentees with guidance! Discover strategies to foster trust, overcome challenges, and support growth through active listening and personalized mentorship."
        publisher={{
          name: "GPE"
        }}
        backgroundImage="/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png"
      />

      <CarouselCard
        title="HOW TO BE A GOOD MENTEE"
        description="Maximize your mentoring journey! Learn how to be proactive, open to feedback, and respectful, while building strong connections and achieving your professional goals."
        publisher={{
          name: "GPE",
        }}
        backgroundImage="/lovable-uploads/92da60df-11bb-4b5b-9610-fdf05ae04823.png"
      />
    </div>
  );
};
