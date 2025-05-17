
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Reply, Trash2 } from 'lucide-react';
import { ReadReceipt } from '../ReadReceipt';
import { useToast } from '@/hooks/use-toast';

interface CommentActionsProps {
  isAuthor: boolean;
  canDelete: boolean;
  isRead: boolean;
  readAt?: string;
  readBy?: string;
  onReply: () => void;
  onDelete: () => void;
  onMarkAsRead: () => void;
}

export const CommentActions: React.FC<CommentActionsProps> = ({ 
  isAuthor,
  canDelete,
  isRead,
  readAt,
  readBy,
  onReply,
  onDelete,
  onMarkAsRead
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs flex items-center gap-1" 
          onClick={onReply}
        >
          <Reply className="h-3 w-3" /> 
          Reply
        </Button>
        
        {canDelete && (
          <Button 
            variant="ghost" 
            size="sm"
            className="text-xs text-destructive hover:text-destructive flex items-center gap-1" 
            onClick={onDelete}
          >
            <Trash2 className="h-3 w-3" /> 
            Delete
          </Button>
        )}
      </div>
      
      {!isAuthor && !isRead && (
        <Button 
          variant="outline" 
          size="sm" 
          className="text-xs flex items-center gap-1" 
          onClick={onMarkAsRead}
        >
          <Check className="h-3 w-3" /> Mark as Read
        </Button>
      )}
      
      {(isRead || isAuthor) && (
        <ReadReceipt 
          isRead={isRead} 
          readAt={readAt}
          readBy={readBy}
        />
      )}
    </div>
  );
};
