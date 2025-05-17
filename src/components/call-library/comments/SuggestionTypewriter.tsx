
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BrainCircuit, ChevronRight } from 'lucide-react';

interface SuggestionTypewriterProps {
  suggestions: string[];
  onSuggestionSelect?: (suggestion: string) => void;
}

export const SuggestionTypewriter: React.FC<SuggestionTypewriterProps> = ({ 
  suggestions,
  onSuggestionSelect
}) => {
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  const currentSuggestion = suggestions[currentSuggestionIndex] || '';
  
  // Typewriter effect
  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= currentSuggestion.length) {
        setDisplayText(currentSuggestion.slice(0, currentIndex));
        currentIndex += 1;
      } else {
        setIsComplete(true);
        clearInterval(intervalId);
        
        // Auto advance to next suggestion after delay
        const nextTimer = setTimeout(() => {
          setCurrentSuggestionIndex((prevIndex) => 
            (prevIndex + 1) % suggestions.length
          );
        }, 5000); // Show completed suggestion for 5 seconds
        
        return () => clearTimeout(nextTimer);
      }
    }, 40); // Speed of typing
    
    return () => clearInterval(intervalId);
  }, [currentSuggestion, currentSuggestionIndex, suggestions]);

  const handleSuggestionClick = () => {
    if (onSuggestionSelect && isComplete) {
      onSuggestionSelect(currentSuggestion);
    }
  };
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentSuggestionIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="bg-secondary/30 border border-accent/20 rounded-md p-3 my-3 cursor-pointer hover:bg-secondary/40 transition-colors"
        onClick={handleSuggestionClick}
      >
        <div className="flex items-start gap-2">
          <BrainCircuit className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-h-[40px]">
            <p className="text-sm text-gray-300">
              {displayText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </p>
          </div>
          {isComplete && onSuggestionSelect && (
            <ChevronRight className="h-4 w-4 text-accent mt-0.5" />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
