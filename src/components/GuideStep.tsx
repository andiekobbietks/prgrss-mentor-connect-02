
import React from 'react';
import { TourTarget } from './TourTarget';
import { HintTrigger } from './HintTrigger';

interface GuideStepProps {
  number: number;
  title: string;
  description: string;
  tourId?: string;
}

const GuideStep = ({ number, title, description, tourId }: GuideStepProps) => {
  return (
    <div className="flex gap-4 mb-6 animate-fade-in">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-center">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          {tourId && (
            <HintTrigger stepId={tourId} className="ml-2" />
          )}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default GuideStep;
