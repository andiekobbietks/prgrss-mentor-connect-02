import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

interface NewCommentFormProps {
  callId: string;
  sessionId: string;
  parentId: string | null;
  userRole: 'mentor' | 'mentee' | 'admin';
  userId: string;
  onSubmitSuccess?: () => void;
  threadTopic?: string;
  setThreadTopic?: (topic: string) => void;
  enforceThreadTopic?: boolean;
  initialContent?: string;
}

export const NewCommentForm: React.FC<NewCommentFormProps> = ({ 
  callId, 
  sessionId,
  parentId,
  userRole,
  userId,
  onSubmitSuccess,
  threadTopic,
  setThreadTopic,
  enforceThreadTopic = false,
  initialContent = ''
}) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [localThreadTopic, setLocalThreadTopic] = useState(threadTopic || '');
  const { toast } = useToast();
  
  // Update content when initialContent changes
  useEffect(() => {
    if (initialContent) {
      setContent(initialContent);
    }
  }, [initialContent]);
  
  // Update local thread topic when the parent one changes
  useEffect(() => {
    if (threadTopic) {
      setLocalThreadTopic(threadTopic);
    }
  }, [threadTopic]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast({
        title: "Comment is empty",
        description: "Please enter a comment before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    if (enforceThreadTopic && !localThreadTopic && !threadTopic) {
      toast({
        title: "Thread topic required",
        description: "Please enter a topic for this thread.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real app, this would call an API
    setTimeout(() => {
      // Simulate success
      const finalThreadTopic = localThreadTopic || threadTopic || '';
      
      if (setThreadTopic && !threadTopic && localThreadTopic) {
        setThreadTopic(localThreadTopic);
      }
      
      toast({
        title: "Comment added",
        description: "Your comment has been posted successfully.",
      });
      
      setContent('');
      setIsSubmitting(false);
      
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    }, 500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="space-y-3">
        {!parentId && !enforceThreadTopic && (
          <div>
            <label htmlFor="topic" className="block text-sm font-medium mb-1">Thread Topic</label>
            <input
              id="topic"
              type="text"
              placeholder="Specify a relevant topic for this conversation"
              value={localThreadTopic}
              onChange={(e) => setLocalThreadTopic(e.target.value)}
              className="w-full px-3 py-2 border border-input bg-card rounded-md text-sm"
              required
            />
          </div>
        )}
        
        {enforceThreadTopic && threadTopic && (
          <div className="bg-secondary/20 px-3 py-2 rounded-md">
            <p className="text-xs font-medium">Topic: <span className="text-accent">{threadTopic}</span></p>
            <p className="text-xs text-gray-400 mt-1">Keep your comment relevant to this topic</p>
          </div>
        )}
        
        <Textarea
          placeholder={
            enforceThreadTopic
              ? `Add to the conversation about "${threadTopic}"...`
              : "Add to the conversation..."
          }
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[100px] bg-card"
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={!content.trim() || (!parentId && !localThreadTopic && !enforceThreadTopic)}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};
