
import React from "react";
import { X } from "lucide-react";

interface HintBoxProps {
  title: string;
  description: string;
  position?: "top" | "bottom";
  onClose?: () => void;
}

export const HintBox: React.FC<HintBoxProps> = ({
  title,
  description,
  position = "bottom",
  onClose,
}) => {
  const positionClasses = position === "top" ? "top-20" : "bottom-20";

  return (
    <div className={`fixed ${positionClasses} left-1/2 transform -translate-x-1/2 z-50 max-w-xs w-full`}>
      <div className="bg-white text-black p-5 rounded-lg shadow-lg">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          {onClose && (
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
              <X size={18} />
            </button>
          )}
        </div>
        <p className="text-sm text-gray-700">{description}</p>
        
        {position === "bottom" && (
          <div className="absolute w-4 h-4 bg-white rotate-45 left-1/2 -ml-2 -bottom-2"></div>
        )}
        {position === "top" && (
          <div className="absolute w-4 h-4 bg-white rotate-45 left-1/2 -ml-2 -top-2"></div>
        )}
      </div>
    </div>
  );
};
