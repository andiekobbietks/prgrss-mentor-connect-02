
import React, { createContext, useContext, useState } from 'react';

type TourStep = {
  id: string;
  title: string;
  description: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
};

type TourContextType = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isOpen: boolean;
  startTour: () => void;
  endTour: () => void;
  nextStep: () => void;
  previousStep: () => void;
  steps: TourStep[];
};

const TourContext = createContext<TourContextType | null>(null);

export const tourSteps: TourStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to PRGRSS!',
    description: 'Connect with corporate mentors through micro-mentorship sessions. Let\'s show you around!',
  },
  {
    id: 'navigation',
    title: 'Easy Navigation',
    description: 'Use these tabs to access profiles, scheduling, and messaging features.',
    placement: 'top'
  },
  {
    id: 'calls',
    title: 'Micro-Mentorship Calls',
    description: 'Sessions are exactly 12 minutes with a 5-minute buffer before and 3 minutes after. This format ensures focused, efficient interactions.',
    placement: 'bottom'
  },
  {
    id: 'messaging',
    title: 'In-App Messaging',
    description: 'Keep all communications within the app for your safety. This helps us maintain a secure environment for everyone.',
    placement: 'left'
  },
  {
    id: 'safety',
    title: 'Your Safety Matters',
    description: 'All profiles are verified. If you have concerns, use our in-app reporting feature to alert our safeguarding team.',
    placement: 'right'
  },
  {
    id: 'feedback',
    title: 'Share Your Thoughts',
    description: 'Your feedback shapes PRGRSS. Use our in-app form to share your experience and help us improve.',
    placement: 'bottom'
  }
];

export function TourProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const startTour = () => {
    setCurrentStep(0);
    setIsOpen(true);
  };

  const endTour = () => {
    setIsOpen(false);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      endTour();
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <TourContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        isOpen,
        startTour,
        endTour,
        nextStep,
        previousStep,
        steps: tourSteps,
      }}
    >
      {children}
    </TourContext.Provider>
  );
}

export function useTour() {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
}
