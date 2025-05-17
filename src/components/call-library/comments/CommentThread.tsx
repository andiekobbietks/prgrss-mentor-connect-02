
import React, { useState, useEffect } from 'react';
import { MessageSquare, ChevronDown, ChevronUp, MinusSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { CommentItem } from './CommentItem';
import { NewCommentForm } from './NewCommentForm';
import { ThreadSuggestions } from './ThreadSuggestions';
import { CommentType } from './types';

interface CommentThreadProps {
  comments: CommentType[];
  callId: string;
  sessionId: string;
  userRole: 'mentor' | 'mentee' | 'admin';
  userId: string;
  threadTopic?: string;
  callTitle?: string;
  callCategory?: string;
}

export const CommentThread: React.FC<CommentThreadProps> = ({ 
  comments, 
  callId, 
  sessionId,
  userRole,
  userId,
  threadTopic,
  callTitle = "Mentoring Session", // Default value
  callCategory = "General" // Default value
}) => {
  const [activeThreadTopic, setActiveThreadTopic] = useState(threadTopic || '');
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  
  // Load isCollapsed state from localStorage with the callId as part of the key
  const storageKey = `thread-collapsed-${callId}`;
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem(storageKey);
    return savedState ? JSON.parse(savedState) : false;
  });
  
  // Save isCollapsed state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(isCollapsed));
  }, [isCollapsed, storageKey]);
  
  const handleSuggestionSelect = (suggestion: string) => {
    setSelectedSuggestion(suggestion);
  };
  
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  return (
    <div className="space-y-2 mt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">
          Comments ({comments.length})
        </h3>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={toggleCollapse}
          className="h-7 px-2"
        >
          {isCollapsed ? (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              <span className="text-xs">Expand</span>
            </>
          ) : (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              <span className="text-xs">Collapse</span>
            </>
          )}
        </Button>
      </div>
      
      <Collapsible open={!isCollapsed} className="w-full">
        <CollapsibleContent>
          {comments.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              <MessageSquare className="mx-auto h-8 w-8 mb-2" />
              <p>No comments yet. Be the first to add a comment!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <CommentItem 
                key={comment.id} 
                comment={comment} 
                depth={0} 
                callId={callId}
                sessionId={sessionId}
                userRole={userRole}
                userId={userId}
                threadTopic={activeThreadTopic || comment.threadTopic}
              />
            ))
          )}
          
          <ThreadSuggestions 
            callTitle={callTitle}
            callCategory={callCategory}
            threadTopic={activeThreadTopic}
            onSuggestionSelect={handleSuggestionSelect}
          />
          
          <NewCommentForm 
            callId={callId} 
            sessionId={sessionId}
            parentId={null}
            userRole={userRole}
            userId={userId}
            threadTopic={activeThreadTopic}
            setThreadTopic={setActiveThreadTopic}
            initialContent={selectedSuggestion}
          />
          
          {/* Additional collapse button near submit area */}
          <div className="flex justify-center mt-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleCollapse}
              className="text-xs text-gray-400 border-gray-700 hover:bg-gray-800"
            >
              {isCollapsed ? (
                <>Expand Comments</>
              ) : (
                <>Collapse Thread</>
              )}
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      {isCollapsed && comments.length > 0 && (
        <div className="bg-secondary/20 p-2 rounded-md text-sm text-gray-400">
          {comments.length} comment{comments.length !== 1 ? 's' : ''} in this thread. Click 'Expand' to view them.
        </div>
      )}
    </div>
  );
};
