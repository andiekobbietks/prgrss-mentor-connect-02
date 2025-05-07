
import React from 'react';
import { motion } from 'framer-motion';
import GuideStep from './GuideStep';
import { AlertTriangle, Clock } from 'lucide-react';

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
      
      {rules.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-amber-950/30 border border-amber-800/30 rounded-lg p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-5 w-5 text-amber-400" />
            <h3 className="font-semibold text-amber-100">Rules to Remember</h3>
          </div>
          <ul className="list-disc pl-5 space-y-3">
            {rules.map((rule, index) => (
              <li key={index} className="text-amber-200/90">{rule.description}</li>
            ))}
          </ul>
        </motion.div>
      )}
      
      {limitations.length > 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 space-y-6"
        >
          <h3 className="font-semibold text-lg text-white border-b border-white/10 pb-3 mb-4">Platform Limitations</h3>
          
          {limitations.map((limitation, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="backdrop-blur-sm bg-secondary/50 border border-white/10 rounded-lg p-5 transition-transform hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-3 mb-4">
                {limitation.icon || <Clock className="h-5 w-5 text-accent" />}
                <h4 className="font-medium text-white">{limitation.title}</h4>
              </div>
              <ul className="divide-y divide-white/10">
                {limitation.items.map((item, idx) => (
                  <li key={idx} className="py-3 flex justify-between">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="font-medium text-accent">{item.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default GuideSection;
