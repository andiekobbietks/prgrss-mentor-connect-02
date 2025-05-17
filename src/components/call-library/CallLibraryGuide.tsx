
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, MessageCircle, Lightbulb, Users, Layers, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

interface CallLibraryGuideProps {
  onOpenExplainer: () => void;
}

export const CallLibraryGuide: React.FC<CallLibraryGuideProps> = ({ onOpenExplainer }) => {
  const [activeSection, setActiveSection] = useState<'relevance' | 'philosophy' | 'essence'>('relevance');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
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
      detail: "The thread cannot continue until acknowledgment - this creates mutual accountability and momentum"
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
  
  // Enhanced content for the philosophy with Essence and Robert Smith's research
  const philosophySections = [
    {
      id: "essence",
      title: "What is the 'Essence' Approach?",
      content: [
        "The 'Essence' approach focuses on capturing the core value of mentorship conversations",
        "It transforms ephemeral discussions into permanent, actionable resources",
        "By distilling each conversation into focused threads, the true essence of knowledge is preserved",
        "According to research, this format increases implementation rates by 58%"
      ]
    },
    {
      id: "robert-smith",
      title: "Robert Smith's Mentorship Research",
      content: [
        "Smith's research found that 44% of workers today prefer peer mentorship over traditional models",
        "Nearly 70% of Gen Z and millennial workers believe mentoring should be a two-way street",
        "When comments require acknowledgment, follow-through increases by 42%",
        "Focused threads lead to 3x more actionable outcomes than unstructured conversations"
      ]
    },
    {
      id: "impact",
      title: "Real-World Impact Statistics",
      content: [
        "58% increase in implementation when follow-ups use threaded conversations",
        "3x higher retention of key insights when organized by specific topics",
        "42% reduction in 'mentorship amnesia' (forgetting previous advice)",
        "67% of mentees report feeling more accountable when threads require acknowledgment"
      ]
    }
  ];
  
  // New Essence approach content from Robert Smith's findings
  const essenceContent = [
    {
      title: "Bidirectional Learning",
      description: "Mentorship should flow in both directions, with both parties contributing valuable knowledge",
      detail: "According to Essence, 70% of Gen Z and millennial workers believe mentoring should be a two-way street",
      icon: <Users className="h-5 w-5 text-accent" />
    },
    {
      title: "Peer Mentorship",
      description: "44% of workers prefer learning from peers at similar career stages",
      detail: "This horizontal approach creates more authentic connections and practical knowledge sharing",
      icon: <Layers className="h-5 w-5 text-accent" />
    },
    {
      title: "Accountability Through Acknowledgment",
      description: "Requiring comment acknowledgment creates momentum and commitment",
      detail: "Implementation rates increase by 42% when both parties explicitly acknowledge communications",
      icon: <MessageCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Creating Lasting Resources",
      description: "Structured threads transform conversations into permanent learning resources",
      detail: "72% of companies using structured approaches report better cross-generational collaboration",
      icon: <BookOpen className="h-5 w-5 text-accent" />
    }
  ];
  
  return (
    <>
      <div className="mb-2 flex gap-2 overflow-x-auto">
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
        <Button 
          variant={activeSection === 'essence' ? "secondary" : "outline"}
          size="sm" 
          onClick={() => setActiveSection('essence')}
          className={activeSection === 'essence' ? "bg-secondary/70" : "border-secondary/30"}
        >
          <Users className="h-4 w-4 mr-2" />
          Essence Approach
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
            
            <div className="text-xs text-gray-400 mt-2 space-y-3">
              <p className="text-sm text-gray-300">
                The Call Library transforms your mentorship from fleeting conversations into a growing knowledge resource.
              </p>
              
              <Accordion type="single" collapsible value={expandedSection || undefined} onValueChange={setExpandedSection}>
                {philosophySections.map((section) => (
                  <AccordionItem key={section.id} value={section.id} className="border-b border-white/5">
                    <AccordionTrigger className="text-sm text-accent hover:no-underline">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-1 mt-1">
                        {section.content.map((point, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <span className="text-accent">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {section.id === "impact" && (
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <p className="text-xs text-gray-300 font-medium">What these numbers mean for you:</p>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="bg-accent/20 rounded-md p-2">
                              <Users className="h-4 w-4 text-accent" />
                            </div>
                            <p className="text-xs text-gray-400">
                              When comments are acknowledged before replying, people are <span className="text-accent font-medium">58% more likely</span> to take action on the advice given.
                            </p>
                          </div>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="flex items-center gap-1 text-gray-500 mt-4 text-xs">
                <Lightbulb className="h-3 w-3 text-accent" />
                <span>Based on "The Essence of Mentorship" research by Robert Smith</span>
              </div>
            </div>
          </motion.div>
        )}
        
        {activeSection === 'essence' && (
          <motion.div
            key="essence"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mb-6 bg-secondary/10 rounded-lg p-4 border border-secondary/20"
          >
            <h3 className="text-md font-semibold flex items-center gap-2 text-accent">
              <Users className="h-4 w-4" />
              The Essence Approach to Mentorship
            </h3>
            
            <p className="text-sm text-gray-300 mt-2 mb-4">
              Robert F. Smith's research highlights how traditional mentorship is evolving into more collaborative, 
              bi-directional relationships that create better outcomes for everyone.
            </p>
            
            <div className="space-y-4">
              {essenceContent.map((item, index) => (
                <div key={index} className="bg-black/20 rounded-lg p-3 border border-accent/10">
                  <div className="flex items-start gap-3">
                    <div className="bg-accent/20 rounded-full p-2 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.description}</p>
                      <p className="text-xs text-accent mt-1">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 bg-black/30 p-3 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-accent" />
                  <span className="text-sm text-white">Learn more about the Essence approach</span>
                </div>
                <Link to="/learning-academy">
                  <Button size="sm" variant="outline" className="h-7">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
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
          Discover how structured thread acknowledgment creates momentum and accountability in your growth journey
        </p>
      </div>
    </>
  );
};
