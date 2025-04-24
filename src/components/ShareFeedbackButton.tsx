
import React from "react";

interface ShareFeedbackButtonProps {
  onClick?: () => void;
}

export const ShareFeedbackButton: React.FC<ShareFeedbackButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center my-6">
      <button
        onClick={onClick}
        className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-full flex items-center justify-center transition-colors"
      >
        <svg 
          className="w-4 h-4 mr-2" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        Share feedback
      </button>
    </div>
  );
};
