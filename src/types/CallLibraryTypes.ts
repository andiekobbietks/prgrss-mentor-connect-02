
import { CommentType } from '@/components/call-library/CommentThread';
import { CallEntryType, CallQuestion } from '@/components/call-library/CallDetail';

// Re-export types
export type { CommentType, CallEntryType, CallQuestion };

// Sample data for the call library
export const sampleCallData: CallEntryType[] = [
  {
    id: "1",
    sessionId: "sess-mentor1-mentee1-12345",
    title: "Career Transition Guidance",
    description: "A mentorship call focused on transitioning from engineering to product management.",
    category: "Career Development",
    date: "2023-05-15T14:30:00",
    duration: "45 min",
    techniques: ["Active Listening", "Strategic Questioning", "Action Planning"],
    rating: 4.8,
    reviewCount: 24,
    image: "/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png",
    questions: [
      {
        id: "q1-1",
        question: "What skills from engineering transfer well to product management?",
        answer: "Technical understanding, problem-solving, and analytical thinking are highly transferable. Engineers often understand technical constraints well, which is valuable in product decisions."
      },
      {
        id: "q1-2",
        question: "How can I build a product portfolio without product experience?",
        answer: "Start with side projects, volunteer for product-related tasks in your current role, contribute to open-source products, or take on product challenges on platforms like ProductHunt."
      },
      {
        id: "q1-3",
        question: "What's the biggest challenge in transitioning to product management?",
        answer: "Usually it's shifting from building solutions to defining problems. Engineers solve given problems; product managers determine which problems are worth solving."
      }
    ],
    mentor: {
      id: "mentor1",
      name: "Alex Washington",
      avatar: "/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png"
    },
    mentee: {
      id: "mentee1",
      name: "Jordan Lee",
      avatar: "/lovable-uploads/92da60df-11bb-4b5b-9610-fdf05ae04823.png"
    },
    comments: [
      {
        id: "c1-1",
        author: {
          id: "mentor1",
          name: "Alex Washington",
          role: "mentor",
          avatar: "/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png"
        },
        content: "I've shared some additional resources about product management certifications that might help with your transition.",
        timestamp: "2023-05-16T09:15:00",
        isRead: true,
        readAt: "2023-05-16T10:30:00",
        readBy: "Mentee",
        replies: [
          {
            id: "c1-1-1",
            author: {
              id: "mentee1",
              name: "Jordan Lee",
              role: "mentee",
              avatar: "/lovable-uploads/92da60df-11bb-4b5b-9610-fdf05ae04823.png"
            },
            content: "Thank you so much for these resources! I've started looking into the Product School certification.",
            timestamp: "2023-05-16T14:20:00",
            isRead: true,
            readAt: "2023-05-16T15:45:00",
            readBy: "Mentor",
            replies: []
          }
        ]
      },
      {
        id: "c1-2",
        author: {
          id: "mentee1",
          name: "Jordan Lee",
          role: "mentee",
          avatar: "/lovable-uploads/92da60df-11bb-4b5b-9610-fdf05ae04823.png"
        },
        content: "I had an informational interview with a PM yesterday and used the talking points we discussed. It went really well!",
        timestamp: "2023-05-20T16:30:00",
        isRead: false,
        replies: []
      }
    ]
  },
  {
    id: "2",
    sessionId: "sess-mentor2-mentee2-67890",
    title: "Technical Interview Preparation",
    description: "Tips and practice for technical interviews in software development roles.",
    category: "Interview Prep",
    date: "2023-05-18T10:00:00",
    duration: "60 min",
    techniques: ["Mock Scenarios", "Feedback Delivery", "Knowledge Transfer"],
    rating: 4.5,
    reviewCount: 18,
    image: "/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png",
    questions: [
      {
        id: "q2-1",
        question: "What should I focus on most when preparing for technical interviews?",
        answer: "Fundamentals of data structures, algorithms, and system design are priorities. But also practice explaining your thought process clearly - interviewers want to see how you think."
      },
      {
        id: "q2-2",
        question: "How do I handle questions I don't immediately know the answer to?",
        answer: "Think out loud, break down the problem, and engage with the interviewer. It's better to show your problem-solving approach than to freeze or give up."
      }
    ],
    mentor: {
      id: "mentor2",
      name: "Sam Rodriguez",
      avatar: "/lovable-uploads/2c62d6b1-86bc-4b5f-8dd9-d1de668bc098.png"
    },
    mentee: {
      id: "mentee2",
      name: "Taylor Kim",
      avatar: "/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
    },
    comments: [
      {
        id: "c2-1",
        author: {
          id: "mentee2",
          name: "Taylor Kim",
          role: "mentee",
          avatar: "/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
        },
        content: "I made it through the first two rounds of interviews! Your tips on system design questions were invaluable.",
        timestamp: "2023-05-22T11:20:00",
        isRead: true,
        readAt: "2023-05-22T13:15:00",
        readBy: "Mentor",
        replies: [
          {
            id: "c2-1-1",
            author: {
              id: "mentor2",
              name: "Sam Rodriguez",
              role: "mentor",
              avatar: "/lovable-uploads/2c62d6b1-86bc-4b5f-8dd9-d1de668bc098.png"
            },
            content: "That's fantastic news, Taylor! What's coming up in the next round? We should prepare specifically for that.",
            timestamp: "2023-05-22T14:05:00",
            isRead: false,
            replies: []
          }
        ]
      }
    ]
  }
];

// Add other sample data as needed
