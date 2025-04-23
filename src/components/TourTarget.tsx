
import React, { useRef, useEffect } from 'react';
import { useTour } from '@/contexts/TourContext';

interface TourTargetProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function TourTarget({ id, children, className = '' }: TourTargetProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { registerTarget } = useTour();

  useEffect(() => {
    if (targetRef.current) {
      registerTarget(id, targetRef);
    }
  }, [id, registerTarget]);

  return (
    <div ref={targetRef} className={className}>
      {children}
    </div>
  );
}
