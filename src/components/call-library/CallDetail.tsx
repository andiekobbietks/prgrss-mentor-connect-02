
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { CommentThread, CommentType } from './CommentThread';

export interface CallQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface CallEntryType {
  id: string;
  sessionId: string;
  title: string;
  description: string;
  category: string;
  date: string;
  duration: string;
  techniques: string[];
  rating?: number;
  reviewCount?: number;
  image?: string;
  questions: CallQuestion[];
  mentor: {
    id: string;
    name: string;
    avatar?: string;
  };
  mentee: {
    id: string;
    name: string;
    avatar?: string;
  };
  comments: CommentType[];
}

interface CallDetailProps {
  call: CallEntryType;
  userRole: 'mentor' | 'mentee' | 'admin';
  userId: string;
  enforceReadReceipts?: boolean;
}

export const CallDetail: React.FC<CallDetailProps> = ({ call, userRole, userId, enforceReadReceipts }) => {
  const [showComments, setShowComments] = useState(false);
  
  const hasUnreadComments = call.comments.some(comment => 
    !comment.isRead && comment.author.id !== userId
  );
  
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  
  return (
    <Card className="bg-card border-accent/10 overflow-hidden mb-6">
      {call.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={call.image} 
            alt={call.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-medium">{call.title}</CardTitle>
          <Badge variant="outline" className="bg-accent/20 text-accent">
            {call.category}
          </Badge>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="text-sm text-gray-400 flex items-center gap-1">
            <span>Mentor: {call.mentor.name}</span>
            <span className="mx-2">•</span>
            <span>Mentee: {call.mentee.name}</span>
          </div>
          <span className="text-sm text-gray-400">
            {new Date(call.date).toLocaleDateString()} • {call.duration}
          </span>
        </div>
        
        <CardDescription className="text-sm text-gray-400 mt-2">
          {call.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        <Accordion type="single" collapsible className="border-y border-white/10 py-2">
          <AccordionItem value="questions" className="border-none">
            <AccordionTrigger className="text-accent hover:text-accent/80 py-2">
              Questions & Answers
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 py-2">
                {call.questions.map((item, index) => (
                  <div key={item.id} className="space-y-2">
                    <div className="flex gap-2">
                      <span className="font-bold text-accent">Q{index + 1}:</span>
                      <p>{item.question}</p>
                    </div>
                    <div className="flex gap-2 pl-6">
                      <span className="font-bold text-accent">A:</span>
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {call.techniques.map((technique) => (
            <span 
              key={technique} 
              className="bg-secondary text-gray-300 text-xs py-1 px-2 rounded-full border border-white/5"
            >
              {technique}
            </span>
          ))}
        </div>
        
        {call.rating && (
          <div className="flex justify-between items-center mt-4">
            <span className="text-xs text-gray-400">{call.duration} recording</span>
            <span className="text-xs text-gray-400">
              ★ {call.rating} ({call.reviewCount} reviews)
            </span>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-2 pb-4 flex flex-col">
        <Button 
          onClick={toggleComments} 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2 relative"
        >
          <MessageSquare className="h-4 w-4" />
          <span>Discussion Thread</span>
          {hasUnreadComments && (
            <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 rounded-full h-2 w-2" />
          )}
          {showComments ? (
            <ChevronUp className="h-4 w-4 ml-2" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-2" />
          )}
        </Button>
        
        <Collapsible open={showComments} className="w-full">
          <CollapsibleContent className="pt-4">
            <CommentThread 
              comments={call.comments} 
              callId={call.id}
              sessionId={call.sessionId}
              userRole={userRole}
              userId={userId}
              callTitle={call.title}
              callCategory={call.category}
            />
          </CollapsibleContent>
        </Collapsible>
      </CardFooter>
    </Card>
  );
};
