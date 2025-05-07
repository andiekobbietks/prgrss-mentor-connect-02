
import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface LimitationItem {
  label: string;
  value: string;
}

interface GuideLimitation {
  title: string;
  items: LimitationItem[];
  icon?: React.ReactNode;
}

interface GuideLimitationsProps {
  limitations: GuideLimitation[];
}

const GuideLimitations = ({ limitations }: GuideLimitationsProps) => {
  if (limitations.length === 0) return null;
  
  return (
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
  );
};

export default GuideLimitations;
