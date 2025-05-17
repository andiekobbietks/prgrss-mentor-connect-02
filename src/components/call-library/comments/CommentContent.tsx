
import React from 'react';

interface CommentContentProps {
  content: string;
  threadTopic?: string;
}

export const CommentContent: React.FC<CommentContentProps> = ({ content, threadTopic }) => {
  return (
    <>
      {threadTopic && (
        <div className="mb-2">
          <span className="text-xs text-gray-400">Topic: </span>
          <span className="text-xs font-medium text-accent">{threadTopic}</span>
        </div>
      )}
      
      <div className="prose prose-sm dark:prose-invert max-w-none mb-3">
        <p className="text-sm text-foreground">{content}</p>
      </div>
    </>
  );
};
