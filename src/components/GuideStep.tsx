
import React from 'react';
import { motion } from 'framer-motion';
import { TourTarget } from './TourTarget';
import { HintTrigger } from './HintTrigger';
import StepNumber from './guide/StepNumber';

interface GuideStepProps {
  number: number;
  title: string;
  description: string;
  tourId?: string;
}

const GuideStep = ({ number, title, description, tourId }: GuideStepProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * number }}
      className="flex gap-4 mb-6 group"
    >
      <StepNumber number={number} />
      <div className="flex-grow">
        <div className="flex items-center">
          <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-accent transition-colors">{title}</h3>
          {tourId && (
            <HintTrigger stepId={tourId} className="ml-2" />
          )}
        </div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default GuideStep;
