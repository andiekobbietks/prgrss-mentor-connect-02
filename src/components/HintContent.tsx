
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTour } from '@/contexts/TourContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function HintContent() {
  const { currentStep, steps, nextStep, previousStep, endTour } = useTour();
  const step = steps[currentStep];

  return (
    <Card className="w-[300px] shadow-lg bg-card text-card-foreground">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{step.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{step.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={previousStep}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={nextStep}
          >
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={endTour}
        >
          Skip
        </Button>
      </CardFooter>
    </Card>
  );
}
