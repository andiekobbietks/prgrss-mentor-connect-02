
import React from 'react';
import { Check } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface ReadReceiptProps {
  isRead: boolean;
  readAt?: string;
  readBy?: string;
}

export const ReadReceipt: React.FC<ReadReceiptProps> = ({ isRead, readAt, readBy }) => {
  if (!isRead) {
    return (
      <span className="text-xs text-gray-400">Unread</span>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center text-xs text-accent">
          <Check className="h-3 w-3 mr-1" />
          <span>Read</span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Read by {readBy} on {readAt}</p>
      </TooltipContent>
    </Tooltip>
  );
};
