
import React from 'react';
import { motion } from 'framer-motion';

interface StepNumberProps {
  number: number;
}

const StepNumber = ({ number }: StepNumberProps) => {
  return (
    <div className="flex-shrink-0">
      <div className="w-10 h-10 bg-accent text-black rounded-full flex items-center justify-center font-bold shadow-lg shadow-accent/20 transition-transform group-hover:scale-110">
        {number}
      </div>
    </div>
  );
};

export default StepNumber;
