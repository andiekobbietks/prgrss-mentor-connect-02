
import React, { useState, useEffect } from 'react';
import { MessageSquare, ChevronDown, ChevronUp, MinusSquare, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { CommentItem } from './CommentItem';
import { NewCommentForm } from './NewCommentForm';
import { ThreadSuggestions } from './ThreadSuggestions';
import { CommentType } from './types';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();
  
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
  
  // Check if there are any unacknowledged comments
  const hasUnreadComments = comments.some(comment => 
    !comment.isRead && comment.author.id !== userId
  );
  
  const hasUnreadReplies = (commentList: CommentType[]): boolean => {
    for (const comment of commentList) {
      if (!comment.isRead && comment.author.id !== userId) return true;
      if (comment.replies && comment.replies.length > 0) {
        if (hasUnreadReplies(comment.replies)) return true;
      }
    }
    return false;
  };
  
  // Show warning if attempting to comment with unread messages
  const showUnreadWarning = hasUnreadReplies(comments);
  
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
          
          {showUnreadWarning && (
            <div className="bg-amber-950/30 border border-amber-800/30 rounded-lg p-3 mb-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-amber-200 font-medium">Unread Comments</p>
                  <p className="text-xs text-amber-200/80">
                    According to Robert Smith's "Essence" research, threads with acknowledged comments are 58% more likely to result in action. Please mark all comments as read before continuing this thread.
                  </p>
                </div>
              </div>
            </div>
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
            disabled={showUnreadWarning}
            onDisabledClick={() => {
              if (showUnreadWarning) {
                toast({
                  title: "Please acknowledge all comments",
                  description: "Mark all comments as read before continuing this thread.",
                  variant: "destructive",
                });
              }
            }}
          />
          
          {/* Additional collapse button near submit area */}
          <div className="flex justify-center mt-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={toggleCollapse}
                    className="text-xs text-gray-400 border-gray-700 hover:bg-gray-800 flex items-center gap-1.5"
                  >
                    {isCollapsed ? (
                      <>
                        <ChevronDown className="h-3.5 w-3.5" />
                        Expand Comments
                      </>
                    ) : (
                      <>
                        <ChevronUp className="h-3.5 w-3.5" />
                        Collapse Thread
                      </>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Your collapse preference will be remembered</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      {isCollapsed && comments.length > 0 && (
        <div className="bg-secondary/20 p-2 rounded-md text-sm text-gray-400">
          {comments.length} comment{comments.length !== 1 ? 's' : ''} in this thread. {hasUnreadComments && (
            <span className="text-amber-300">Contains unread comments!</span>
          )}
        </div>
      )}
    </div>
  );
};
