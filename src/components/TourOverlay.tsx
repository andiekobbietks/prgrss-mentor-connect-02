
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTour } from '@/contexts/TourContext';
import { HintContent } from '@/components/HintContent';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';

interface TourOverlayProps {
  className?: string;
}

export function TourOverlay({ className = '' }: TourOverlayProps) {
  const { isOpen, currentStep, steps, targetRefs, nextStep, previousStep } = useTour();
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [overlayHeight, setOverlayHeight] = useState(0);
  const [overlayWidth, setOverlayWidth] = useState(0);

  // Setup swipe handlers for accessibility
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextStep,
    onSwipedRight: previousStep,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  // Update overlay size
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOverlayHeight(window.innerHeight);
      setOverlayWidth(window.innerWidth);
      
      const updateDimensions = () => {
        setOverlayHeight(window.innerHeight);
        setOverlayWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }
  }, []);

  // Calculate position for current step
  useEffect(() => {
    if (isOpen && steps[currentStep]?.targetId) {
      const targetId = steps[currentStep].targetId;
      const targetRef = targetRefs.get(targetId);
      
      if (targetRef?.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const safeArea = 20; // Safe area around the target
        
        setPosition({
          top: rect.top - safeArea,
          left: rect.left - safeArea,
          width: rect.width + (safeArea * 2),
          height: rect.height + (safeArea * 2)
        });
      }
    }
  }, [isOpen, currentStep, steps, targetRefs]);

  // Handle keyboard navigation for accessibility
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'Space':
          nextStep();
          e.preventDefault();
          break;
        case 'ArrowLeft':
          previousStep();
          e.preventDefault();
          break;
        case 'Escape':
          const { endTour } = useTour();
          endTour();
          e.preventDefault();
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextStep, previousStep]);

  // Don't render if not open
  if (!isOpen) return null;

  // Create the cutout style that follows iOS coach marks style
  const maskStyle = {
    width: `${overlayWidth}px`,
    height: `${overlayHeight}px`,
    maskImage: `radial-gradient(circle at ${position.left + position.width/2}px ${position.top + position.height/2}px, transparent ${Math.max(position.width, position.height)/2}px, black ${Math.max(position.width, position.height)/2 + 1}px)`
  };

  // Calculate optimal position for the hint relative to target
  const placement = steps[currentStep]?.placement || 'bottom';
  const hintPosition = {
    top: 0,
    left: 0
  };

  switch (placement) {
    case 'top':
      hintPosition.top = position.top - 120; // Above the target
      hintPosition.left = position.left + (position.width / 2) - 150; // Centered horizontally
      break;
    case 'bottom':
      hintPosition.top = position.top + position.height + 20; // Below the target
      hintPosition.left = position.left + (position.width / 2) - 150; // Centered horizontally
      break;
    case 'left':
      hintPosition.top = position.top + (position.height / 2) - 80; // Centered vertically
      hintPosition.left = position.left - 320; // To the left of the target
      break;
    case 'right':
      hintPosition.top = position.top + (position.height / 2) - 80; // Centered vertically
      hintPosition.left = position.left + position.width + 20; // To the right of the target
      break;
  }

  // Ensure the hint stays within viewport bounds
  hintPosition.left = Math.max(20, Math.min(hintPosition.left, overlayWidth - 320));
  hintPosition.top = Math.max(20, Math.min(hintPosition.top, overlayHeight - 160));

  return createPortal(
    <div 
      className={`fixed inset-0 z-50 ${className}`} 
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-title"
      {...swipeHandlers}
    >
      <AnimatePresence>
        <motion.div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={maskStyle}
        />
        <motion.div 
          className="absolute"
          style={{ 
            top: `${hintPosition.top}px`, 
            left: `${hintPosition.left}px`
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <HintContent arrowPlacement={placement} />
        </motion.div>
      </AnimatePresence>
    </div>,
    document.body
  );
}
