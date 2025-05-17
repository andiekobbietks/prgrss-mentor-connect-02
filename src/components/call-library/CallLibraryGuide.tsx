
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, MessageCircle } from 'lucide-react';

interface CallLibraryGuideProps {
  onOpenExplainer: () => void;
}

export const CallLibraryGuide: React.FC<CallLibraryGuideProps> = ({ onOpenExplainer }) => {
  return (
    <>
      {/* Thread Relevance Guide */}
      <div className="mb-6 bg-secondary/10 rounded-lg p-4 border border-secondary/20">
        <h3 className="text-md font-semibold flex items-center gap-2 text-accent">
          <MessageCircle className="h-4 w-4" />
          Thread Relevance Guidelines
        </h3>
        <ul className="text-xs text-gray-400 mt-2 space-y-1 pl-6 list-disc">
          <li>Each thread must stay focused on its specific topic</li>
          <li>You must acknowledge (mark as read) comments before replying</li>
          <li>For tangential discussions, create a new thread or schedule another call</li>
          <li>This structured approach builds a focused, searchable knowledge base</li>
        </ul>
      </div>
      
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
