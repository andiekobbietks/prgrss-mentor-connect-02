
import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

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
  showStartScreen: boolean;
  setShowStartScreen: (value: boolean) => void;
  goToGuide: () => void;
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
    description: 'Keep all communications within the app. Message limits vary based on scheduled meetings.',
    placement: 'left',
    targetId: 'messaging-icon'
  },
  {
    id: 'profile',
    title: 'Your Profile',
    description: 'All profiles are verified. Complete your profile to be matched with the right mentors or mentees.',
    placement: 'right',
    targetId: 'profile-icon'
  },
  {
    id: 'limitations',
    title: 'Platform Guidelines',
    description: 'The platform has specific limits on call bookings, messaging, and scheduling to ensure quality interactions.',
    placement: 'bottom',
    targetId: 'calls-info'
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
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [targetRefs] = useState<Map<string, React.RefObject<HTMLElement>>>(new Map());
  const navigate = useNavigate();

  useEffect(() => {
    // Check if this is the first visit
    const tourCompleted = localStorage.getItem(TOUR_COMPLETED_KEY);
    if (!tourCompleted) {
      setIsFirstVisit(true);
      // Don't auto-start tour, we'll use the splash screen instead
    } else {
      setIsFirstVisit(false);
      setShowStartScreen(false);
    }
  }, []);

  const startTour = useCallback(() => {
    setCurrentStep(0);
    setIsOpen(true);
    setShowStartScreen(false);
  }, []);

  const endTour = useCallback(() => {
    setIsOpen(false);
    setCurrentStep(0);
    // Mark tour as completed
    localStorage.setItem(TOUR_COMPLETED_KEY, 'true');
    setIsFirstVisit(false);
  }, []);

  const nextStep = useCallback(() => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      endTour();
    }
  }, [currentStep, endTour]);

  const previousStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const registerTarget = useCallback((id: string, ref: React.RefObject<HTMLElement>) => {
    targetRefs.set(id, ref);
  }, [targetRefs]);

  const goToGuide = useCallback(() => {
    endTour();
    navigate('/guide');
  }, [endTour, navigate]);

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
        showStartScreen,
        setShowStartScreen,
        goToGuide,
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
