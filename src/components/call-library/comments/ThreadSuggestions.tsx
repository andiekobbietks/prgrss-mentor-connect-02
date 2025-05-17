
import React, { useState, useEffect } from 'react';
import { SuggestionTypewriter } from './SuggestionTypewriter';
import { Info, MessageCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HintTrigger } from '@/components/HintTrigger';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@/components/ui/accordion';

interface ThreadSuggestionsProps {
  callTitle: string;
  callCategory: string;
  threadTopic?: string;
  onSuggestionSelect?: (suggestion: string) => void;
}

export const ThreadSuggestions: React.FC<ThreadSuggestionsProps> = ({ 
  callTitle, 
  callCategory,
  threadTopic,
  onSuggestionSelect
}) => {
  const [activeTab, setActiveTab] = useState<'guidelines' | 'suggestions'>('guidelines');
  const [showPhilosophy, setShowPhilosophy] = useState(false);
  
  // Enhanced thread rules with more context
  const threadRules = [
    "Keep your comment relevant to this specific thread - this helps create a searchable knowledge base",
    "Always acknowledge (mark as read) comments before replying - just like confirming you've seen a message",
    "Switch to in-app messaging for tangential discussions - keeps the thread clean and focused",
    "Book another appointment for new topics that deserve their own thread - this maintains organization",
    "Focus on actionable insights that will build value over time - create lasting resources"
  ];
  
  // Philosophy content that explains the value
  const philosophyContent = [
    "The Call Library transforms one-time conversations into permanent learning resources",
    "Each thread builds a searchable knowledge base that grows in value over time",
    "Studies show that structured follow-ups increase implementation rates by 65%",
    "This approach creates accountability and continuity between mentoring sessions"
  ];
  
  // Generate contextual suggestions based on the call details
  const generateSuggestions = () => {
    // This would eventually be replaced with an AI model like Phi
    const defaultSuggestions = [
      `Could you elaborate on specific strategies discussed in "${callTitle}"?`,
      `What were the key takeaways from this ${callCategory} session that you found most valuable?`,
      `How do you plan to implement the advice shared in this discussion?`,
      `Are there any parts of this conversation you'd like to revisit in our next session?`,
      `What measurable outcomes are you hoping to achieve from the insights in this call?`,
      `Could you share any challenges you anticipate in implementing what we discussed?`
    ];
    
    // If there's a thread topic, add some topic-specific suggestions
    if (threadTopic) {
      return [
        `Can you share more details about "${threadTopic}"?`,
        `What specific challenges are you facing with "${threadTopic}"?`,
        `How has your approach to "${threadTopic}" evolved since our call?`,
        `What resources would help you advance further with "${threadTopic}"?`,
        `What's one small step you could take this week to progress on "${threadTopic}"?`,
        `How would you measure success in implementing our discussion on "${threadTopic}"?`,
        ...defaultSuggestions
      ];
    }
    
    return defaultSuggestions;
  };
  
  // Auto-switch between tabs
  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab(prev => prev === 'guidelines' ? 'suggestions' : 'guidelines');
    }, 30000); // Switch every 30 seconds
    
    return () => clearInterval(tabInterval);
  }, []);
  
  return (
    <div className="space-y-2 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button 
            variant={activeTab === 'guidelines' ? "secondary" : "ghost"} 
            size="sm"
            onClick={() => setActiveTab('guidelines')}
            className="text-xs px-2 py-1 h-8"
          >
            <MessageCircle className="h-3.5 w-3.5 mr-1" />
            Thread Guidelines
          </Button>
          <Button 
            variant={activeTab === 'suggestions' ? "secondary" : "ghost"} 
            size="sm"
            onClick={() => setActiveTab('suggestions')}
            className="text-xs px-2 py-1 h-8"
          >
            <Info className="h-3.5 w-3.5 mr-1" />
            Suggested Follow-ups
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setShowPhilosophy(!showPhilosophy)}
          className="text-xs text-accent border-accent/20 hover:bg-accent/10 px-2 py-1 h-8"
        >
          <BookOpen className="h-3.5 w-3.5 mr-1" />
          Why This Matters
        </Button>
      </div>
      
      {showPhilosophy && (
        <div className="bg-secondary/20 border border-accent/10 rounded-lg p-3 my-2 text-xs">
          <h4 className="font-medium text-accent mb-2">Call Library Philosophy</h4>
          <ul className="space-y-2 text-gray-300">
            {philosophyContent.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-xs text-gray-400">Based on mentorship research by Robert Smith</span>
            <HintTrigger stepId="call-library-philosophy" className="text-accent hover:text-accent/80">
              <span className="text-xs underline">Learn more</span>
            </HintTrigger>
          </div>
        </div>
      )}
      
      {activeTab === 'guidelines' && (
        <div className="text-xs text-gray-400 mt-1">
          <p className="mb-1 font-medium text-accent">Thread Guidelines:</p>
          <SuggestionTypewriter 
            suggestions={threadRules} 
          />
        </div>
      )}
      
      {activeTab === 'suggestions' && (
        <div className="text-xs text-gray-400 mt-1">
          <p className="mb-1 font-medium text-accent">Suggested follow-ups:</p>
          <SuggestionTypewriter 
            suggestions={generateSuggestions()} 
            onSuggestionSelect={onSuggestionSelect}
          />
        </div>
      )}
      
      <Accordion type="single" collapsible className="w-full border-t border-white/10 pt-2 mt-3">
        <AccordionItem value="explore" className="border-b-0">
          <AccordionTrigger className="py-1 text-xs text-accent/80 hover:no-underline">
            Explore more call library features
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Thread comments are organized by relevance to keep discussions focused</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>All comments can be easily searched and referenced across sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>The AI assistant can help you draft relevant responses within context</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Key insights from threads are automatically highlighted for later reference</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
