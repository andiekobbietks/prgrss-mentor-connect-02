
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { useTour } from '@/contexts/TourContext';

const GuideTitle = () => {
  const { startTour } = useTour();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center mb-8"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">PRGRSS User Guide</h1>
      <p className="text-gray-400 max-w-xl mx-auto">
        This guide will help you get started with PRGRSS, whether you're a mentor or mentee.
      </p>
      
      <div className="flex justify-center mt-6">
        <Button 
          onClick={startTour}
          className="bg-accent hover:bg-accent/90 text-black flex items-center gap-2 transition-all transform hover:scale-105"
        >
          <Info className="h-4 w-4" />
          Take Interactive Tour
        </Button>
      </div>
    </motion.div>
  );
};

export default GuideTitle;
