
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
        threadTopic: "Product Management Certifications",
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
            threadTopic: "Product Management Certifications",
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
        threadTopic: "PM Interview Experience",
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
        threadTopic: "Interview Progress Update",
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
            threadTopic: "Interview Progress Update",
            replies: []
          }
        ]
      }
    ]
  },
  // NEW SAMPLE DATA BELOW
  {
    id: "3",
    sessionId: "sess-mentor3-mentee3-23456",
    title: "Leadership Skills Development",
    description: "Working on emotional intelligence and team management skills for a leadership position.",
    category: "Leadership",
    date: "2023-06-05T13:00:00",
    duration: "50 min",
    techniques: ["Role Playing", "Scenario Analysis", "Strengths Assessment"],
    rating: 4.9,
    reviewCount: 31,
    image: "/lovable-uploads/92da60df-11bb-4b5b-9610-fdf05ae04823.png",
    questions: [
      {
        id: "q3-1",
        question: "How can I better handle difficult team conversations?",
        answer: "Start with empathetic listening, acknowledge emotions before solutions, and use the SBIA framework: Situation, Behavior, Impact, and Action. This provides a structured approach to feedback that feels less personal."
      },
      {
        id: "q3-2",
        question: "What's the most common mistake new leaders make?",
        answer: "Trying to prove themselves through action rather than building relationships first. Take time to understand team dynamics and individuals before making significant changes."
      }
    ],
    mentor: {
      id: "mentor3",
      name: "Jamie Rivera",
      avatar: "/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
    },
    mentee: {
      id: "mentee3",
      name: "Casey Morgan",
      avatar: "/lovable-uploads/2c62d6b1-86bc-4b5f-8dd9-d1de668bc098.png"
    },
    comments: [
      {
        id: "c3-1",
        author: {
          id: "mentee3",
          name: "Casey Morgan",
          role: "mentee",
          avatar: "/lovable-uploads/2c62d6b1-86bc-4b5f-8dd9-d1de668bc098.png"
        },
        content: "I tried the 'pause and reflect' technique during our team meeting today, and it completely changed the dynamic!",
        timestamp: "2023-06-07T15:40:00",
        isRead: true,
        readAt: "2023-06-07T17:20:00",
        readBy: "Mentor",
        threadTopic: "Leadership Techniques",
        replies: [
          {
            id: "c3-1-1",
            author: {
              id: "mentor3",
              name: "Jamie Rivera",
              role: "mentor",
              avatar: "/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
            },
            content: "That's excellent! Creating that brief space for reflection often prevents reactive responses. How did your team members respond?",
            timestamp: "2023-06-07T18:30:00",
            isRead: false,
            threadTopic: "Leadership Techniques",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: "4",
    sessionId: "sess-mentor4-mentee4-34567",
    title: "Backend Architecture Design",
    description: "Review and optimization of microservices architecture for scalability.",
    category: "Technical Skills",
    date: "2023-06-12T11:00:00",
    duration: "75 min",
    techniques: ["Whiteboarding", "Code Review", "Performance Analysis"],
    rating: 4.7,
    reviewCount: 15,
    image: "/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png",
    questions: [
      {
        id: "q4-1",
        question: "When should we choose microservices over a monolithic architecture?",
        answer: "Consider microservices when you need independent scaling of services, want technological diversity in your stack, have clear domain boundaries, and have the operational maturity to handle distributed systems."
      },
      {
        id: "q4-2",
        question: "What are the best practices for service discovery in a microservices architecture?",
        answer: "Use a dedicated service registry like Consul or Eureka, implement health checks, consider client-side vs. server-side discovery based on your needs, and plan for failure modes in your discovery mechanism."
      },
      {
        id: "q4-3",
        question: "How should we handle inter-service communication?",
        answer: "Choose between synchronous (REST, gRPC) and asynchronous (message queues) based on your use case. For critical paths, consider circuit breakers and retries. Document your APIs rigorously and version them appropriately."
      }
    ],
    mentor: {
      id: "mentor4",
      name: "Robin Chen",
      avatar: "/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png"
    },
    mentee: {
      id: "mentee4",
      name: "Dakota Smith",
      avatar: "/lovable-uploads/92da60df-11bb-4b5b-9610-fdf05ae04823.png"
    },
    comments: [
      {
        id: "c4-1",
        author: {
          id: "mentor4",
          name: "Robin Chen",
          role: "mentor",
          avatar: "/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png"
        },
        content: "I've created a GitHub repository with sample code for the circuit breaker pattern we discussed.",
        timestamp: "2023-06-13T09:45:00",
        isRead: true,
        readAt: "2023-06-13T10:20:00",
        readBy: "Mentee",
        threadTopic: "Circuit Breaker Implementation",
        replies: [
          {
            id: "c4-1-1",
            author: {
              id: "mentee4",
              name: "Dakota Smith",
              role: "mentee",
              avatar: "/lovable-uploads/92da60df-11bb-4b5b-9610-fdf05ae04823.png"
            },
            content: "Thank you! This is exactly what I needed. I've already started integrating it into our payment service.",
            timestamp: "2023-06-14T11:30:00",
            isRead: true,
            readAt: "2023-06-14T13:10:00",
            readBy: "Mentor",
            threadTopic: "Circuit Breaker Implementation",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: "5",
    sessionId: "sess-mentor5-mentee5-45678",
    title: "Startup Funding Strategies",
    description: "Exploring different funding options for early-stage startups and pitch preparation.",
    category: "Career Development",
    date: "2023-06-20T15:30:00",
    duration: "60 min",
    techniques: ["Pitch Practice", "Financial Modeling", "Investor Psychology"],
    rating: 4.9,
    reviewCount: 27,
    image: "/lovable-uploads/2c62d6b1-86bc-4b5f-8dd9-d1de668bc098.png",
    questions: [
      {
        id: "q5-1",
        question: "Should we focus on angel investors or venture capital at our stage?",
        answer: "With your current traction but pre-revenue status, angel investors or early-stage seed funds are likely a better fit. They typically have more appetite for risk and can move faster than larger VCs who might want to see more validation."
      },
      {
        id: "q5-2",
        question: "How should we structure our pitch deck?",
        answer: "Follow a classic structure: problem, solution, market size, business model, traction, team, competition, and ask. But lead with your strongest elements. In your case, emphasize your unique technology and founding team credentials."
      }
    ],
    mentor: {
      id: "mentor5",
      name: "Morgan Bailey",
      avatar: "/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
    },
    mentee: {
      id: "mentee5",
      name: "Avery Johnson",
      avatar: "/lovable-uploads/2c62d6b1-86bc-4b5f-8dd9-d1de668bc098.png"
    },
    comments: [
      {
        id: "c5-1",
        author: {
          id: "mentee5",
          name: "Avery Johnson",
          role: "mentee",
          avatar: "/lovable-uploads/2c62d6b1-86bc-4b5f-8dd9-d1de668bc098.png"
        },
        content: "We got a meeting with Sequoia Capital next week! I'd love to do another practice pitch session before then.",
        timestamp: "2023-06-22T10:15:00",
        isRead: false,
        threadTopic: "Investor Meeting Prep",
        replies: []
      }
    ]
  },
  {
    id: "6",
    sessionId: "sess-mentor6-mentee6-56789",
    title: "Work-Life Balance for Remote Teams",
    description: "Strategies for maintaining team cohesion and preventing burnout in distributed workforces.",
    category: "Leadership",
    date: "2023-06-25T09:00:00",
    duration: "45 min",
    techniques: ["Policy Development", "Culture Building", "Wellness Programs"],
    rating: 4.6,
    reviewCount: 22,
    image: "/lovable-uploads/92da60df-11bb-4b5b-9610-fdf05ae04823.png",
    questions: [
      {
        id: "q6-1",
        question: "How can we create boundaries between work and personal time in a remote setting?",
        answer: "Establish clear working hours expectations, encourage 'shutdown rituals', use status indicators in communication tools, and lead by example as managers by not sending off-hours messages."
      },
      {
        id: "q6-2",
        question: "What team activities work well for remote teams to build culture?",
        answer: "Virtual coffee chats, online game sessions, collaborative playlists, book clubs, and periodic in-person retreats all work well. The key is consistency and creating space for non-work interactions."
      },
      {
        id: "q6-3",
        question: "How do we identify burnout in remote team members?",
        answer: "Look for changes in communication patterns, quality of work, camera-off meetings, decreased participation, and schedule regular one-on-ones focused on wellbeing, not just tasks."
      }
    ],
    mentor: {
      id: "mentor6",
      name: "Ellis Park",
      avatar: "/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png"
    },
    mentee: {
      id: "mentee6",
      name: "Jordan Casey",
      avatar: "/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
    },
    comments: [
      {
        id: "c6-1",
        author: {
          id: "mentor6",
          name: "Ellis Park",
          role: "mentor",
          avatar: "/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png"
        },
        content: "I'm sharing the template for the team wellness survey we discussed. It's been validated across multiple remote-first companies.",
        timestamp: "2023-06-26T16:20:00",
        isRead: true,
        readAt: "2023-06-26T17:45:00",
        readBy: "Mentee",
        threadTopic: "Team Wellness Tracking",
        replies: [
          {
            id: "c6-1-1",
            author: {
              id: "mentee6",
              name: "Jordan Casey",
              role: "mentee",
              avatar: "/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
            },
            content: "This is exactly what we needed! We'll be sending it out next week. The anonymity features are particularly well designed.",
            timestamp: "2023-06-27T09:30:00",
            isRead: false,
            threadTopic: "Team Wellness Tracking",
            replies: []
          }
        ]
      },
      {
        id: "c6-2",
        author: {
          id: "mentee6",
          name: "Jordan Casey",
          role: "mentee",
          avatar: "/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
        },
        content: "We implemented the 'No Meeting Wednesdays' policy and the team feedback has been overwhelmingly positive!",
        timestamp: "2023-07-03T14:15:00",
        isRead: true,
        readAt: "2023-07-03T15:40:00",
        readBy: "Mentor",
        threadTopic: "Meeting Culture Improvements",
        replies: [
          {
            id: "c6-2-1",
            author: {
              id: "mentor6",
              name: "Ellis Park",
              role: "mentor",
              avatar: "/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png"
            },
            content: "That's fantastic to hear! Focused work time is so crucial. Have you seen any measurable productivity changes yet?",
            timestamp: "2023-07-03T16:05:00",
            isRead: false,
            threadTopic: "Meeting Culture Improvements",
            replies: []
          }
        ]
      }
    ]
  }
];
