
import React from 'react';
import { motion } from 'framer-motion';
import GuideStep from './GuideStep';
import GuideRules from './guide/GuideRules';
import GuideLimitations from './guide/GuideLimitations';

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
    <div className="space-y-8 p-5 md:p-6">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xl md:text-2xl font-bold text-center mb-8 text-white"
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, staggerChildren: 0.1 }}
        className="space-y-4"
      >
        {steps.map((step, index) => (
          <GuideStep 
            key={index}
            number={index + 1}
            title={step.title}
            description={step.description}
            tourId={step.tourId}
          />
        ))}
      </motion.div>
      
      <GuideRules rules={rules} />
      <GuideLimitations limitations={limitations} />
    </div>
  );
};

export default GuideSection;
