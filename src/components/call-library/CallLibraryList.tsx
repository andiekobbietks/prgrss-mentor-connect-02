
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { CallDetail } from '@/components/call-library/CallDetail';
import { CallEntryType } from '@/types/CallLibraryTypes';

interface CallLibraryListProps {
  filteredCalls: CallEntryType[];
  userRole: 'mentor' | 'mentee' | 'admin';  // Updated to use the union type
  userId: string;
}

export const CallLibraryList: React.FC<CallLibraryListProps> = ({
  filteredCalls,
  userRole,
  userId,
}) => {
  if (filteredCalls.length === 0) {
    return (
      <div className="text-center py-16">
        <MessageSquare className="h-12 w-12 mx-auto text-gray-500 mb-4" />
        <h3 className="text-xl font-medium mb-2">No calls found</h3>
        <p className="text-gray-400">
          Try adjusting your search or filters to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 mb-20">
      {filteredCalls.map((call) => (
        <motion.div
          key={call.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: parseFloat(call.id) * 0.1 }}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-full">
                <CallDetail 
                  call={call} 
                  userRole={userRole}
                  userId={userId}
                  enforceReadReceipts={true}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-sm">
                {call.comments.some(c => !c.isRead && c.author.id !== userId) 
                  ? "This call has unread comments" 
                  : "All comments have been read"}
              </p>
            </TooltipContent>
          </Tooltip>
        </motion.div>
      ))}
    </div>
  );
};
