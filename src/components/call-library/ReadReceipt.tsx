
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
      <span className="text-xs text-gray-400 flex items-center">
        <span className="h-2 w-2 bg-amber-500 rounded-full mr-1"></span>
        Unread
      </span>
    );
  }

  const formattedDate = readAt ? new Date(readAt).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }) : 'unknown date';

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center text-xs text-accent">
          <Check className="h-3 w-3 mr-1" />
          <span>Read</span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Read by {readBy || 'recipient'} on {formattedDate}</p>
      </TooltipContent>
    </Tooltip>
  );
};
