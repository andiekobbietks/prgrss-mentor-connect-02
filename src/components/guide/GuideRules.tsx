
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface GuideRule {
  description: string;
}

interface GuideRulesProps {
  rules: GuideRule[];
}

const GuideRules = ({ rules }: GuideRulesProps) => {
  if (rules.length === 0) return null;
  
  return (
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
  );
};

export default GuideRules;
