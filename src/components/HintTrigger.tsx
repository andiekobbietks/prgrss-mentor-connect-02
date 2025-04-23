
import React from 'react';
import { useTour } from '@/contexts/TourContext';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HintTriggerProps {
  stepId: string;
  className?: string;
  children?: React.ReactNode;
}

export function HintTrigger({ stepId, className = '', children }: HintTriggerProps) {
  const { steps, setCurrentStep, startTour } = useTour();
  
  const handleClick = () => {
    // Find the step index by ID
    const stepIndex = steps.findIndex(step => step.id === stepId);
    if (stepIndex >= 0) {
      setCurrentStep(stepIndex);
      startTour();
    }
  };
  
  return (
    <Button
      variant="ghost"
      size="sm"
      className={`rounded-full w-6 h-6 p-0 inline-flex items-center justify-center text-accent hover:bg-accent/10 ${className}`}
      onClick={handleClick}
      aria-label={`Show information about ${stepId}`}
    >
      {children || <Info className="w-4 h-4" />}
    </Button>
  );
}
