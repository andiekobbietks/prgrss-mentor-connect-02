
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTour } from '@/contexts/TourContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, X, BookOpen, ArrowUpDown } from 'lucide-react';

interface HintContentProps {
  arrowPlacement?: 'top' | 'bottom' | 'left' | 'right';
}

export function HintContent({ arrowPlacement }: HintContentProps) {
  const { currentStep, steps, nextStep, previousStep, endTour, goToGuide } = useTour();
  const step = steps[currentStep];

  // Check if this is a reverse mentorship related hint
  const isReverseMentorshipHint = step.id === 'call-library-philosophy' || step.id === 'reverse-mentorship';

  const renderArrow = () => {
    if (!arrowPlacement) return null;
    
    const arrowClasses = {
      top: "absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-secondary",
      bottom: "absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-secondary",
      left: "absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-secondary",
      right: "absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-secondary"
    };
    
    return <div className={arrowClasses[arrowPlacement]} aria-hidden="true" />;
  };

  return (
    <Card className="w-[300px] shadow-lg bg-secondary text-white relative rounded-xl border-white/10 overflow-visible" role="dialog" aria-labelledby={`hint-title-${step.id}`}>
      {renderArrow()}
      <CardHeader className="pb-2">
        <CardTitle id={`hint-title-${step.id}`} className="text-lg font-medium text-accent flex items-center gap-2">
          {isReverseMentorshipHint && <ArrowUpDown className="h-4 w-4" />}
          {step.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-300">{step.description}</p>
        
        {isReverseMentorshipHint && (
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-xs text-accent font-medium">Robert F. Smith on Reverse Mentorship:</p>
            <p className="text-xs text-gray-300 mt-1 italic">
              "Nearly 70% of Gen Z and millennial workers believe that mentoring should be a two-way street. At every level, mentorship should be about mutual learning and growth."
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col pb-4 pt-2">
        <div className="flex justify-between w-full mb-2">
          <div className="flex gap-2 items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={previousStep}
              disabled={currentStep === 0}
              className="h-8 p-0 w-8 rounded-full text-accent hover:bg-accent/10 disabled:opacity-50"
              aria-label="Previous step"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <span className="text-xs text-gray-400" aria-live="polite">
              {currentStep + 1} of {steps.length}
            </span>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={nextStep}
              className="h-8 p-0 w-8 rounded-full text-accent hover:bg-accent/10"
              aria-label={currentStep === steps.length - 1 ? "Finish tour" : "Next step"}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={endTour}
            className="h-8 p-1 rounded-full text-gray-400 hover:text-accent hover:bg-accent/10"
            aria-label="Skip tour"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={goToGuide}
          className="text-xs w-full mt-1 border-accent/30 text-accent hover:bg-accent/10"
        >
          <BookOpen className="h-3 w-3 mr-2" />
          {isReverseMentorshipHint ? "Learn More About Reverse Mentorship" : "View Full Guide"}
        </Button>
      </CardFooter>
    </Card>
  );
}
