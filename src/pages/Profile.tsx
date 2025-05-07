
import React from "react";
import { TourTarget } from "@/components/TourTarget";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Profile: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p className="text-gray-400 mb-6">
        Manage your profile information and settings.
      </p>
      
      <div className="space-y-6">
        {/* Profile sections would go here */}
        
        {/* Feedback button for tour */}
        <TourTarget id="feedback-button" className="mt-8">
          <Button variant="outline" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Share Feedback
          </Button>
        </TourTarget>
      </div>
    </div>
  );
};

export default Profile;
