
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTour } from '@/contexts/TourContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface HintContentProps {
  arrowPlacement?: 'top' | 'bottom' | 'left' | 'right';
}

export function HintContent({ arrowPlacement }: HintContentProps) {
  const { currentStep, steps, nextStep, previousStep, endTour } = useTour();
  const step = steps[currentStep];

  // Create arrow position based on placement
  const renderArrow = () => {
    if (!arrowPlacement) return null;
    
    const arrowClasses = {
      top: "absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white",
      bottom: "absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white",
      left: "absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-white",
      right: "absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-white"
    };
    
    return <div className={arrowClasses[arrowPlacement]} aria-hidden="true" />;
  };

  return (
    <Card className="w-[300px] shadow-lg bg-white text-black relative rounded-xl border-0 overflow-visible" role="dialog" aria-labelledby={`hint-title-${step.id}`}>
      {renderArrow()}
      <CardHeader className="pb-2">
        <CardTitle id={`hint-title-${step.id}`} className="text-lg font-medium text-gray-800">{step.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{step.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between pb-4 pt-2">
        <div className="flex gap-2 items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={previousStep}
            disabled={currentStep === 0}
            className="h-8 p-0 w-8 rounded-full text-accent flex items-center justify-center"
            aria-label="Previous step"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <span className="text-xs text-gray-500" aria-live="polite">
            {currentStep + 1} of {steps.length}
          </span>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={nextStep}
            className="h-8 p-0 w-8 rounded-full text-accent flex items-center justify-center"
            aria-label={currentStep === steps.length - 1 ? "Finish tour" : "Next step"}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={endTour}
          className="h-8 p-1 rounded-full text-gray-400 hover:text-gray-600"
          aria-label="Skip tour"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
