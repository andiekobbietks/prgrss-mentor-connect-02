
import React from 'react';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CallLibraryHeaderProps {
  hasUnreadComments: boolean;
}

export const CallLibraryHeader: React.FC<CallLibraryHeaderProps> = ({ hasUnreadComments }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-accent" />
          Call Library
          {hasUnreadComments && (
            <span className="bg-red-500 rounded-full h-2 w-2" />
          )}
        </h1>
        <Link to="/" className="text-gray-400 hover:text-accent flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
      </div>
      <p className="text-gray-400 mb-6">
        Your micro-mentorship knowledge repository. Revisit insights and continue valuable conversations asynchronously.
      </p>
    </>
  );
};
