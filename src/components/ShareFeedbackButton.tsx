
import React from "react";
import { useNavigate } from "react-router-dom";
import { Info, BookOpen, MessageSquare } from "lucide-react";
import { TourTarget } from "./TourTarget";
import { Button } from "./ui/button";

interface ShareFeedbackButtonProps {
  onClick?: () => void;
}

export const ShareFeedbackButton: React.FC<ShareFeedbackButtonProps> = ({ onClick }) => {
  const navigate = useNavigate();

  const handleLearningAcademyClick = () => {
    navigate('/learning-academy');
  };

  const handleCallLibraryClick = () => {
    navigate('/call-library');
  };

  return (
    <div className="flex flex-col items-center my-6 space-y-3">
      <Button
        onClick={onClick}
        className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-full flex items-center justify-center transition-colors w-full max-w-md"
      >
        <Info className="w-4 h-4 mr-2" />
        Share feedback
      </Button>
      
      <TourTarget id="learning-academy-button">
        <Button
          onClick={handleLearningAcademyClick}
          className="bg-accent hover:bg-accent/90 text-black py-3 px-6 rounded-full flex items-center justify-center transition-colors w-full max-w-md"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          PRGRSS Learning Academy
        </Button>
      </TourTarget>
      
      <TourTarget id="call-library-button">
        <Button
          onClick={handleCallLibraryClick}
          className="bg-secondary hover:bg-secondary/80 text-white py-3 px-6 rounded-full flex items-center justify-center transition-colors w-full max-w-md border border-accent/30"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Call Library & Commentary
        </Button>
      </TourTarget>
    </div>
  );
};
