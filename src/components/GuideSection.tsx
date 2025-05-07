
import React from 'react';
import GuideStep from './GuideStep';
import { AlertTriangle, Clock, Calendar, MessageSquare } from 'lucide-react';

interface GuideRule {
  description: string;
}

interface GuideLimitation {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
  icon?: React.ReactNode;
}

interface GuideSectionProps {
  title: string;
  steps: {
    title: string;
    description: string;
    tourId?: string;
  }[];
  rules: GuideRule[];
  limitations?: GuideLimitation[];
}

const GuideSection = ({ title, steps, rules, limitations = [] }: GuideSectionProps) => {
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
      
      {limitations.length > 0 && (
        <div className="mt-8 space-y-6">
          <h3 className="font-semibold text-lg border-b pb-2">Platform Limitations</h3>
          
          {limitations.map((limitation, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                {limitation.icon || <Clock className="h-5 w-5 text-primary" />}
                <h4 className="font-medium">{limitation.title}</h4>
              </div>
              <ul className="divide-y divide-gray-100">
                {limitation.items.map((item, idx) => (
                  <li key={idx} className="py-2 flex justify-between">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GuideSection;
