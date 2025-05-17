
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface CommentHeaderProps {
  author: {
    id: string;
    name: string;
    role: 'mentor' | 'mentee' | 'admin';
    avatar?: string;
  };
  timestamp: string;
}

export const CommentHeader: React.FC<CommentHeaderProps> = ({ author, timestamp }) => {
  return (
    <div className="flex items-center justify-between mb-1">
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>
            {author.name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <span className="font-medium">{author.name}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ml-2 ${
            author.role === 'mentor' 
              ? 'bg-accent/20 text-accent' 
              : 'bg-blue-500/20 text-blue-500'
          }`}>
            {author.role.charAt(0).toUpperCase() + author.role.slice(1)}
          </span>
        </div>
      </div>
      
      <span className="text-xs text-gray-400">
        {new Date(timestamp).toLocaleDateString('en-US', { 
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </span>
    </div>
  );
};
