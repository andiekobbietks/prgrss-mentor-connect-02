
import React from 'react';
import GuideStep from './GuideStep';
import { AlertTriangle } from 'lucide-react';

interface GuideRule {
  description: string;
}

interface GuideSectionProps {
  title: string;
  steps: {
    title: string;
    description: string;
    tourId?: string;
  }[];
  rules: GuideRule[];
}

const GuideSection = ({ title, steps, rules }: GuideSectionProps) => {
  return (
    <div className="space-y-6 p-4">
      <h2 className="text-xl font-bold text-center mb-6">{title}</h2>
      
      <div className="space-y-2">
        {steps.map((step, index) => (
          <GuideStep 
            key={index}
            number={index + 1}
            title={step.title}
            description={step.description}
            tourId={step.tourId}
          />
        ))}
      </div>
      
      {rules.length > 0 && (
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <h3 className="font-semibold">Rules to Remember</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            {rules.map((rule, index) => (
              <li key={index} className="text-gray-700">{rule.description}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GuideSection;
