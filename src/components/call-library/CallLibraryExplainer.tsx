
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, MessageSquare, Clock, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CallLibraryExplainerProps {
  onClose: () => void;
}

export const CallLibraryExplainer: React.FC<CallLibraryExplainerProps> = ({ onClose }) => {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    {
      title: "Welcome to the Call Library",
      content: "This is your personal archive of mentorship conversations, designed to help you learn, grow, and connect with mentors in a meaningful way.",
      icon: <MessageSquare className="h-8 w-8 text-accent" />
    },
    {
      title: "Inspiration & Background",
      content: "The Call Library was inspired by the need to preserve valuable mentorship insights while respecting everyone's time. We combined concepts from Slack-style threading, educational forums, and mentor time preservation techniques.",
      icon: <Clock className="h-8 w-8 text-accent" />
    },
    {
      title: "Key Features",
      content: "Interactive call cards display your sessions. Threaded comments allow for asynchronous follow-ups. Read receipts ensure accountability. Category filtering helps you find relevant content quickly.",
      icon: <MessageSquare className="h-8 w-8 text-accent" />
    },
    {
      title: "Benefits",
      content: "Knowledge preservation: Save valuable insights. Asynchronous engagement: Discuss without needing to be online at the same time. Social etiquette: Encourages thoughtful communication. Learning resource: Build a searchable knowledge base.",
      icon: <Calendar className="h-8 w-8 text-accent" />
    },
    {
      title: "Future Vision",
      content: "We're working on AI-enhanced search, a community knowledge base, analytics for improvement, and integration with your learning pathways to connect conversations to career milestones.",
      icon: <MessageSquare className="h-8 w-8 text-accent" />
    }
  ];

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      onClose();
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card className="w-full max-w-2xl bg-card border-accent/10 shadow-xl">
        <CardHeader className="relative pb-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4" 
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex justify-center mb-2">
            {sections[currentSection].icon}
          </div>
          <CardTitle className="text-2xl text-center">{sections[currentSection].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 text-center text-lg mb-8">
            {sections[currentSection].content}
          </p>
          
          <div className="flex justify-between items-center mt-6">
            <Button 
              variant="outline" 
              onClick={prevSection} 
              disabled={currentSection === 0}
            >
              Previous
            </Button>
            
            <div className="flex space-x-1">
              {sections.map((_, index) => (
                <span 
                  key={index} 
                  className={`block w-2 h-2 rounded-full ${index === currentSection ? 'bg-accent' : 'bg-gray-600'}`}
                />
              ))}
            </div>
            
            <Button onClick={nextSection}>
              {currentSection === sections.length - 1 ? "Get Started" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
