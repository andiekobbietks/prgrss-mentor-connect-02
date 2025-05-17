
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, MessageCircle, Lightbulb, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CallLibraryGuideProps {
  onOpenExplainer: () => void;
}

export const CallLibraryGuide: React.FC<CallLibraryGuideProps> = ({ onOpenExplainer }) => {
  const [activeSection, setActiveSection] = useState<'relevance' | 'philosophy'>('relevance');
  
  // Enhanced content for the guidelines
  const relevanceGuidelines = [
    {
      title: "Thread Focus",
      description: "Think of each thread like a TikTok video – short, focused, and to the point",
      detail: "This keeps your knowledge searchable and organized for future reference"
    },
    {
      title: "Acknowledge First", 
      description: "Always mark comments as read before replying", 
      detail: "Just like giving a quick 'seen' to a DM before responding"
    },
    {
      title: "New Threads for New Topics",
      description: "Create separate discussions for tangential topics",
      detail: "This keeps the conversation clean and focused on specific outcomes"
    },
    {
      title: "Building a Knowledge Base",
      description: "Every focused thread contributes to your personal growth archive",
      detail: "65% of mentees report better results from structured conversations"
    }
  ];
  
  // Enhanced content for the philosophy
  const philosophyPoints = [
    "Transform conversations into lasting resources you can refer back to",
    "Build a personalized knowledge library from every mentorship session",
    "Create continuity between sessions with clear follow-ups",
    "Track your progress over time through structured conversations",
    "According to The Essence study, structured follow-ups increase implementation by 58%"
  ];
  
  return (
    <>
      <div className="mb-2 flex gap-2">
        <Button 
          variant={activeSection === 'relevance' ? "secondary" : "outline"}
          size="sm" 
          onClick={() => setActiveSection('relevance')}
          className={activeSection === 'relevance' ? "bg-secondary/70" : "border-secondary/30"}
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Thread Guidelines
        </Button>
        <Button 
          variant={activeSection === 'philosophy' ? "secondary" : "outline"}
          size="sm" 
          onClick={() => setActiveSection('philosophy')}
          className={activeSection === 'philosophy' ? "bg-secondary/70" : "border-secondary/30"}
        >
          <Lightbulb className="h-4 w-4 mr-2" />
          Philosophy
        </Button>
      </div>
      
      <AnimatePresence mode="wait">
        {activeSection === 'relevance' && (
          <motion.div
            key="relevance"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mb-6 bg-secondary/10 rounded-lg p-4 border border-secondary/20"
          >
            <h3 className="text-md font-semibold flex items-center gap-2 text-accent">
              <MessageCircle className="h-4 w-4" />
              Thread Relevance Guidelines
            </h3>
            
            <div className="space-y-3 mt-3">
              {relevanceGuidelines.map((guideline, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="bg-accent/20 text-accent rounded-full w-5 h-5 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm text-gray-200 font-medium">{guideline.title}</p>
                    <p className="text-xs text-gray-400">{guideline.description}</p>
                    <p className="text-xs text-gray-500 italic">{guideline.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        
        {activeSection === 'philosophy' && (
          <motion.div
            key="philosophy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mb-6 bg-secondary/10 rounded-lg p-4 border border-secondary/20"
          >
            <h3 className="text-md font-semibold flex items-center gap-2 text-accent">
              <Lightbulb className="h-4 w-4" />
              Call Library Philosophy
            </h3>
            
            <div className="text-xs text-gray-400 mt-2 space-y-2">
              <p className="text-sm text-gray-300">
                The Call Library transforms mentorship from ephemeral conversations into permanent learning resources.
              </p>
              
              <ul className="space-y-2 pl-6 list-disc">
                {philosophyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              
              <div className="flex items-center gap-1 text-gray-500 mt-4 text-xs">
                <Users className="h-3 w-3" />
                <span>Based on research by Robert Smith and The Essence mentorship study</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Help button to reopen explainer */}
      <div className="mb-6">
        <Button 
          variant="outline" 
          onClick={onOpenExplainer}
          className="text-accent border-accent/20 hover:bg-accent/10"
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Learn About the Call Library Philosophy
        </Button>
        <p className="text-xs text-gray-500 mt-1 ml-1">
          Discover how this feature transforms mentorship conversations into lasting resources
        </p>
      </div>
    </>
  );
};
