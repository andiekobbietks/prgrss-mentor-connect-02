
import React, { useState } from 'react';
import { SuggestionTypewriter } from './SuggestionTypewriter';

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
  // Rules for thread etiquette
  const threadRules = [
    "Keep your comment relevant to this specific thread",
    "Switch to in-app messaging for tangential discussions",
    "Book another appointment to generate a new thread if needed",
    "Focus on actionable insights related to this session"
  ];
  
  // Generate contextual suggestions based on the call details
  const generateSuggestions = () => {
    // This would eventually be replaced with an AI model like Phi
    const defaultSuggestions = [
      `Could you elaborate on specific strategies discussed in "${callTitle}"?`,
      `What were the key takeaways from this ${callCategory} session that you found most valuable?`,
      `How do you plan to implement the advice shared in this discussion?`,
      `Are there any parts of this conversation you'd like to revisit in our next session?`
    ];
    
    // If there's a thread topic, add some topic-specific suggestions
    if (threadTopic) {
      return [
        `Can you share more details about "${threadTopic}"?`,
        `What specific challenges are you facing with "${threadTopic}"?`,
        `How has your approach to "${threadTopic}" evolved since our call?`,
        `What resources would help you advance further with "${threadTopic}"?`,
        ...defaultSuggestions
      ];
    }
    
    return defaultSuggestions;
  };
  
  return (
    <div className="space-y-2 mb-4">
      <div className="text-xs text-gray-400 mt-1">
        <p className="mb-1 font-medium text-accent">Thread Guidelines:</p>
        <SuggestionTypewriter 
          suggestions={threadRules} 
        />
      </div>
      
      <div className="text-xs text-gray-400 mt-3">
        <p className="mb-1 font-medium text-accent">Suggested follow-ups:</p>
        <SuggestionTypewriter 
          suggestions={generateSuggestions()} 
          onSuggestionSelect={onSuggestionSelect}
        />
      </div>
    </div>
  );
};
