
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { NewCommentForm } from './NewCommentForm';
import { CommentType } from './types';
import { CommentActions } from './CommentActions';
import { DeleteCommentDialog } from './DeleteCommentDialog';
import { CommentHeader } from './CommentHeader';
import { CommentContent } from './CommentContent';

interface CommentItemProps {
  comment: CommentType;
  depth: number;
  callId: string;
  sessionId: string;
  userRole: 'mentor' | 'mentee' | 'admin';
  userId: string;
  threadTopic?: string;
}

export const CommentItem: React.FC<CommentItemProps> = ({ 
  comment, 
  depth, 
  callId,
  sessionId,
  userRole,
  userId,
  threadTopic
}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
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
  
  const handleDelete = () => {
    // In real implementation, this would call an API to delete the comment
    toast({
      title: "Comment deleted",
      description: "The comment has been removed from this thread.",
    });
    setIsDeleteDialogOpen(false);
  };
  
  const isAuthor = comment.author.id === userId;
  const canDelete = isAuthor || userRole === 'admin';
  const relevantTopic = comment.threadTopic || threadTopic;
  
  return (
    <div className={`${depth > 0 ? 'ml-6 pt-4' : ''}`}>
      <Card className={`p-4 ${isAuthor ? 'bg-secondary/50' : 'bg-card'}`}>
        <div className="flex flex-col">
          <CommentHeader author={comment.author} timestamp={comment.timestamp} />
          
          <div className="ml-11"> {/* Offset to align with avatar */}
            <CommentContent content={comment.content} threadTopic={relevantTopic} />
            
            <CommentActions 
              isAuthor={isAuthor}
              canDelete={canDelete}
              isRead={comment.isRead}
              readAt={comment.readAt}
              readBy={comment.readBy}
              onReply={toggleReply}
              onDelete={() => setIsDeleteDialogOpen(true)}
              onMarkAsRead={markAsRead}
            />
          </div>
        </div>
      </Card>
      
      <DeleteCommentDialog 
        isOpen={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onDelete={handleDelete}
      />
      
      {showReplyForm && (
        <div className="ml-6 mt-3">
          <NewCommentForm 
            callId={callId} 
            sessionId={sessionId}
            parentId={comment.id}
            userRole={userRole}
            userId={userId}
            onSubmitSuccess={() => setShowReplyForm(false)}
            threadTopic={relevantTopic}
            enforceThreadTopic={true}
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
              threadTopic={relevantTopic}
            />
          ))}
        </div>
      )}
    </div>
  );
};
