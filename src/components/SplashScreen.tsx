
import React from 'react';
import { useTour } from '@/contexts/TourContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function SplashScreen() {
  const { startTour, goToGuide, showStartScreen } = useTour();
  
  if (!showStartScreen) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-md w-full p-6 space-y-6 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold tracking-wider text-accent mb-4">PRGRSS</h1>
          <p className="text-lg text-gray-300 mb-8">
            Welcome to your micro-mentorship journey
          </p>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <Button 
            onClick={startTour} 
            className="w-full bg-accent hover:bg-accent/80 text-black py-3 text-lg font-medium"
          >
            Take the Tour
          </Button>
          
          <Button 
            variant="outline" 
            onClick={goToGuide}
            className="w-full border-gray-600 hover:bg-secondary text-gray-300 py-3"
          >
            View Full Guide
          </Button>
          
          <button 
            onClick={() => {
              const { setShowStartScreen, setIsFirstVisit } = useTour();
              setShowStartScreen(false);
              setIsFirstVisit(false);
              localStorage.setItem('prgrss-tour-completed', 'true');
            }}
            className="text-gray-500 hover:text-gray-400 text-sm mt-8"
          >
            Skip for now
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
