
import React from "react";
import { ChevronRight } from "lucide-react";

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
    <div className="relative rounded-xl overflow-hidden card-transition card-hover min-h-[200px] mb-6 w-full">
      {backgroundImage ? (
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={backgroundImage} 
            className="w-full h-full object-cover"
            alt={title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-secondary rounded-xl"></div>
      )}

      <div className="relative p-6 flex flex-col justify-between h-full">
        <div className="space-y-1">
          {logo && (
            <div className="mb-2">
              <img src={logo} alt="Company logo" className="h-8" />
              {badge && (
                <div className="bg-[rgba(0,0,0,0.5)] backdrop-blur-sm text-xs uppercase tracking-wider py-1 px-2 rounded inline-block mt-2 text-amber-200">
                  {badge}
                </div>
              )}
            </div>
          )}
          
          {publisher && (
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full overflow-hidden flex items-center justify-center">
                {publisher.avatar ? (
                  <img src={publisher.avatar} alt={publisher.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-sm font-bold">{publisher.name.charAt(0)}</span>
                )}
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-400">
                <span>Published by</span>
                <div className="text-amber-200">{publisher.name}</div>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-2 text-shadow">{title}</h3>
          <p className="text-sm text-gray-300 mb-4 line-clamp-2">{description}</p>
          
          <div className="flex justify-end">
            <button className="bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] transition-colors rounded-full p-2">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HomeCarousel: React.FC = () => {
  return (
    <div className="px-4 py-6">
      <CarouselCard
        logo="/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
        title="ZEBRA"
        description="Zebra is a world leader in innovative digital solutions, hardware and software."
        badge="PARTNER"
        backgroundImage="/lovable-uploads/25592c32-e5be-443a-a77f-dba237cf6573.png"
      />
      
      <CarouselCard
        title="HOW TO BE A GOOD MENTEE"
        description="Maximize your mentoring journey! Learn how to be proactive, open to feedback, and respectful, while building strong connections and achieving your professional goals."
        publisher={{
          name: "GPE",
        }}
        backgroundImage="/lovable-uploads/92da60df-11bb-4b5b-9610-fdf05ae04823.png"
      />
      
      <CarouselCard
        title="HOW TO BE A GOOD MENTOR"
        description="Empower your mentees with guidance! Discover strategies to foster trust, overcome challenges, and support growth through active listening and personalized mentorship."
        publisher={{
          name: "GPE",
        }}
        backgroundImage="/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png"
      />
    </div>
  );
};
