
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface NewCommentFormProps {
  callId: string;
  sessionId: string;
  parentId: string | null;
  userRole: 'mentor' | 'mentee' | 'admin';
  userId: string;
  onSubmitSuccess?: () => void;
  threadTopic?: string;
  setThreadTopic?: React.Dispatch<React.SetStateAction<string>>;
  enforceThreadTopic?: boolean;
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
  enforceThreadTopic = false
}) => {
  const [comment, setComment] = useState('');
  const [topic, setTopic] = useState(threadTopic || '');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!comment.trim()) {
      toast({
        title: "Empty comment",
        description: "Please write something before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    if (!parentId && !topic.trim()) {
      toast({
        title: "Topic required",
        description: "Please specify a topic for this thread to maintain relevance.",
        variant: "destructive",
      });
      return;
    }
    
    // In real implementation, this would call an API to add a comment
    toast({
      title: "Comment added",
      description: enforceThreadTopic 
        ? "Your comment has been added to the thread." 
        : "Your comment has been added. Remember to keep discussions on topic.",
    });
    
    // If this is a new top-level comment and we have a setThreadTopic function
    if (!parentId && setThreadTopic) {
      setThreadTopic(topic);
    }
    
    // Reset form
    setComment('');
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
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
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
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
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px] bg-card"
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={!comment.trim() || (!parentId && !topic.trim() && !enforceThreadTopic)}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};
