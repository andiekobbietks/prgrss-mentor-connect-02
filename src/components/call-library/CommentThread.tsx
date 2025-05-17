
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ReadReceipt } from './ReadReceipt';
import { MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export interface CommentType {
  id: string;
  author: {
    id: string;
    name: string;
    role: 'mentor' | 'mentee' | 'admin';
    avatar?: string;
  };
  content: string;
  timestamp: string;
  isRead: boolean;
  readAt?: string;
  readBy?: string;
  replies: CommentType[];
}

interface CommentThreadProps {
  comments: CommentType[];
  callId: string;
  sessionId: string;
  userRole: 'mentor' | 'mentee' | 'admin';
  userId: string;
}

export const CommentThread: React.FC<CommentThreadProps> = ({ 
  comments, 
  callId, 
  sessionId,
  userRole,
  userId
}) => {
  return (
    <div className="space-y-6 mt-6">
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
          />
        ))
      )}
      
      <NewCommentForm 
        callId={callId} 
        sessionId={sessionId}
        parentId={null}
        userRole={userRole}
        userId={userId}
      />
    </div>
  );
};

interface CommentItemProps {
  comment: CommentType;
  depth: number;
  callId: string;
  sessionId: string;
  userRole: 'mentor' | 'mentee' | 'admin';
  userId: string;
}

const CommentItem: React.FC<CommentItemProps> = ({ 
  comment, 
  depth, 
  callId,
  sessionId,
  userRole,
  userId
}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const { toast } = useToast();
  const maxDepth = 3;
  
  const toggleReply = () => {
    // Only allow reply if the comment has been read
    if (!comment.isRead && comment.author.id !== userId && userRole !== 'admin') {
      toast({
        title: "Can't reply yet",
        description: "You need to mark this comment as read before replying.",
        variant: "destructive",
      });
      return;
    }
    setShowReplyForm(!showReplyForm);
  };
  
  const markAsRead = () => {
    // In real implementation, this would call an API
    toast({
      title: "Marked as read",
      description: "This comment has been marked as read.",
    });
    
    // Simulate updating the comment state
    comment.isRead = true;
    comment.readAt = new Date().toISOString();
    comment.readBy = userRole === 'mentor' ? 'Mentor' : 'Mentee';
  };
  
  const isAuthor = comment.author.id === userId;
  
  return (
    <div className={`${depth > 0 ? 'ml-6 pt-4' : ''}`}>
      <Card className={`p-4 ${isAuthor ? 'bg-secondary/50' : 'bg-card'}`}>
        <div className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
            <AvatarFallback>
              {comment.author.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{comment.author.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  comment.author.role === 'mentor' 
                    ? 'bg-accent/20 text-accent' 
                    : 'bg-blue-500/20 text-blue-500'
                }`}>
                  {comment.author.role.charAt(0).toUpperCase() + comment.author.role.slice(1)}
                </span>
              </div>
              
              <span className="text-xs text-gray-400">
                {new Date(comment.timestamp).toLocaleDateString('en-US', { 
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
            
            <div className="prose prose-sm dark:prose-invert max-w-none mb-3">
              <p className="text-sm text-foreground">{comment.content}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs" 
                onClick={toggleReply}
              >
                Reply
              </Button>
              
              {!isAuthor && !comment.isRead && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs" 
                  onClick={markAsRead}
                >
                  Mark as Read
                </Button>
              )}
              
              {(comment.isRead || isAuthor) && (
                <ReadReceipt 
                  isRead={comment.isRead} 
                  readAt={comment.readAt}
                  readBy={comment.readBy}
                />
              )}
            </div>
          </div>
        </div>
      </Card>
      
      {showReplyForm && (
        <div className="ml-6 mt-3">
          <NewCommentForm 
            callId={callId} 
            sessionId={sessionId}
            parentId={comment.id}
            userRole={userRole}
            userId={userId}
            onSubmitSuccess={() => setShowReplyForm(false)}
          />
        </div>
      )}
      
      {comment.replies.length > 0 && (
        <div className="mt-3 border-l-2 border-accent/20 pl-4">
          {comment.replies.map((reply) => (
            <CommentItem 
              key={reply.id} 
              comment={reply} 
              depth={Math.min(depth + 1, maxDepth)}
              callId={callId}
              sessionId={sessionId}
              userRole={userRole}
              userId={userId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface NewCommentFormProps {
  callId: string;
  sessionId: string;
  parentId: string | null;
  userRole: 'mentor' | 'mentee' | 'admin';
  userId: string;
  onSubmitSuccess?: () => void;
}

const NewCommentForm: React.FC<NewCommentFormProps> = ({ 
  callId, 
  sessionId,
  parentId,
  userRole,
  userId,
  onSubmitSuccess
}) => {
  const [comment, setComment] = useState('');
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
    
    // In real implementation, this would call an API to add a comment
    toast({
      title: "Comment added",
      description: "Your comment has been added to the thread.",
    });
    
    // Reset form
    setComment('');
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="space-y-3">
        <Textarea
          placeholder="Add to the conversation..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px] bg-card"
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={!comment.trim()}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};
