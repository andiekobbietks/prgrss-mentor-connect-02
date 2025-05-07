
import React from 'react';

interface GuideStepProps {
  number: number;
  title: string;
  description: string;
}

const GuideStep = ({ number, title, description }: GuideStepProps) => {
  return (
    <div className="flex gap-4 mb-6 animate-fade-in">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default GuideStep;
