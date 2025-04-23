
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

type TourStep = {
  id: string;
  title: string;
  description: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  targetId?: string;
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
  targetRefs: Map<string, React.RefObject<HTMLElement>>;
  registerTarget: (id: string, ref: React.RefObject<HTMLElement>) => void;
  isFirstVisit: boolean;
  setIsFirstVisit: (value: boolean) => void;
};

const TourContext = createContext<TourContextType | null>(null);

export const tourSteps: TourStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to PRGRSS!',
    description: 'Connect with corporate mentors through micro-mentorship sessions. Let\'s show you around!',
    targetId: 'welcome-logo'
  },
  {
    id: 'navigation',
    title: 'Easy Navigation',
    description: 'Use these tabs to access profiles, scheduling, and messaging features.',
    placement: 'top',
    targetId: 'navigation-tabs'
  },
  {
    id: 'calls',
    title: 'Micro-Mentorship Calls',
    description: 'Sessions are exactly 12 minutes with a 5-minute buffer before and 3 minutes after. This format ensures focused, efficient interactions.',
    placement: 'bottom',
    targetId: 'calls-info'
  },
  {
    id: 'messaging',
    title: 'In-App Messaging',
    description: 'Keep all communications within the app for your safety. This helps us maintain a secure environment for everyone.',
    placement: 'left',
    targetId: 'messaging-icon'
  },
  {
    id: 'safety',
    title: 'Your Safety Matters',
    description: 'All profiles are verified. If you have concerns, use our in-app reporting feature to alert our safeguarding team.',
    placement: 'right',
    targetId: 'profile-icon'
  },
  {
    id: 'feedback',
    title: 'Share Your Thoughts',
    description: 'Your feedback shapes PRGRSS. Use our in-app form to share your experience and help us improve.',
    placement: 'bottom',
    targetId: 'feedback-button'
  }
];

const TOUR_COMPLETED_KEY = 'prgrss-tour-completed';

export function TourProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [targetRefs] = useState<Map<string, React.RefObject<HTMLElement>>>(new Map());

  useEffect(() => {
    // Check if this is the first visit
    const tourCompleted = localStorage.getItem(TOUR_COMPLETED_KEY);
    if (!tourCompleted) {
      setIsFirstVisit(true);
      // Auto-start tour for first-time visitors after a small delay
      const timer = setTimeout(() => {
        startTour();
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsFirstVisit(false);
    }
  }, []);

  const startTour = () => {
    setCurrentStep(0);
    setIsOpen(true);
  };

  const endTour = () => {
    setIsOpen(false);
    setCurrentStep(0);
    // Mark tour as completed
    localStorage.setItem(TOUR_COMPLETED_KEY, 'true');
    setIsFirstVisit(false);
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

  const registerTarget = (id: string, ref: React.RefObject<HTMLElement>) => {
    targetRefs.set(id, ref);
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
        targetRefs,
        registerTarget,
        isFirstVisit,
        setIsFirstVisit,
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
