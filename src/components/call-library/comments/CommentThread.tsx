
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { CommentItem } from './CommentItem';
import { NewCommentForm } from './NewCommentForm';
import { CommentType } from './types';

interface CommentThreadProps {
  comments: CommentType[];
  callId: string;
  sessionId: string;
  userRole: 'mentor' | 'mentee' | 'admin';
  userId: string;
  threadTopic?: string;
}

export const CommentThread: React.FC<CommentThreadProps> = ({ 
  comments, 
  callId, 
  sessionId,
  userRole,
  userId,
  threadTopic
}) => {
  const [activeThreadTopic, setActiveThreadTopic] = useState(threadTopic || '');
  
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
            threadTopic={activeThreadTopic || comment.threadTopic}
          />
        ))
      )}
      
      <NewCommentForm 
        callId={callId} 
        sessionId={sessionId}
        parentId={null}
        userRole={userRole}
        userId={userId}
        threadTopic={activeThreadTopic}
        setThreadTopic={setActiveThreadTopic}
      />
    </div>
  );
};
