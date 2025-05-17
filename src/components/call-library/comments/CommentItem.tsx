
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Check, Reply, Trash2 } from 'lucide-react';
import { ReadReceipt } from '../ReadReceipt';
import { NewCommentForm } from './NewCommentForm';
import { CommentType } from './types';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

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
            
            {relevantTopic && (
              <div className="mb-2">
                <span className="text-xs text-gray-400">Topic: </span>
                <span className="text-xs font-medium text-accent">{relevantTopic}</span>
              </div>
            )}
            
            <div className="prose prose-sm dark:prose-invert max-w-none mb-3">
              <p className="text-sm text-foreground">{comment.content}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs flex items-center gap-1" 
                  onClick={toggleReply}
                >
                  <Reply className="h-3 w-3" /> 
                  Reply
                </Button>
                
                {canDelete && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-xs text-destructive hover:text-destructive flex items-center gap-1" 
                    onClick={() => setIsDeleteDialogOpen(true)}
                  >
                    <Trash2 className="h-3 w-3" /> 
                    Delete
                  </Button>
                )}
              </div>
              
              {!isAuthor && !comment.isRead && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs flex items-center gap-1" 
                  onClick={markAsRead}
                >
                  <Check className="h-3 w-3" /> Mark as Read
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
      
      {/* Delete confirmation dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this comment?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently remove this comment from the thread. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
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
