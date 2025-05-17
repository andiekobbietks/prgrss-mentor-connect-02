
export interface CommentType {
  id: string;
  author: {
    id: string;
    name: string;
    role: 'mentor' | 'mentee' | 'admin';
    avatar?: string;
  };
  content: string;
  timestamp: string;
  isRead: boolean;
  readAt?: string;
  readBy?: string;
  replies: CommentType[];
  threadTopic?: string;
}
