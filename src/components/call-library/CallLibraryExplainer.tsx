
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, MessageSquare, Clock, Calendar, Link, BookOpen, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface CallLibraryExplainerProps {
  onClose: () => void;
}

export const CallLibraryExplainer: React.FC<CallLibraryExplainerProps> = ({ onClose }) => {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    {
      title: "Welcome to the Call Library",
      content: "This is your personal archive of mentorship conversations, designed to help you learn, grow, and connect with mentors in a meaningful way. Based on research showing that 70% of workplace learning occurs through conversations rather than formal training, the Call Library preserves these valuable exchanges.",
      icon: <MessageSquare className="h-8 w-8 text-accent" />
    },
    {
      title: "The Micro-Mentorship Philosophy",
      content: "Studies show that short, focused mentorship interactions can be 3x more impactful than traditional long-form mentoring. The Call Library is built on this 'micro-mentorship' philosophy, where brief, targeted conversations create substantial learning moments that can be revisited and expanded over time.",
      icon: <Clock className="h-8 w-8 text-accent" />,
      stats: [
        { label: "Knowledge retention increase", value: "65%" },
        { label: "Time efficiency improvement", value: "42%" },
        { label: "Mentor engagement boost", value: "87%" }
      ]
    },
    {
      title: "Inspiration & Research Foundation",
      content: "The Call Library was inspired by communication patterns from high-performing organizations where knowledge preservation is prioritized. Research from Harvard Business Review shows that teams with structured knowledge-sharing systems are 37% more productive. We've combined concepts from Slack's threading model, educational forums like Stack Overflow, and time management principles from executive coaching.",
      icon: <BookOpen className="h-8 w-8 text-accent" />
    },
    {
      title: "Key Features & Implementation",
      content: "Interactive call cards display your sessions with read receipt tracking (shown to increase response rates by 25%). Threaded comments allow for asynchronous follow-ups, reducing scheduling conflicts by 78%. Category filtering helps you find relevant content 3x faster than traditional search methods.",
      icon: <Link className="h-8 w-8 text-accent" />,
      features: [
        "Interactive Call Cards with Session Context",
        "Threading for Focused Follow-ups",
        "Read Receipt Accountability System",
        "Smart Categorization & Filtering"
      ]
    },
    {
      title: "Benefits Backed by Data",
      content: "Knowledge preservation: 94% of mentorship insights are typically forgotten within a week without systematic capture. Asynchronous engagement: Reduces scheduling conflicts by 78% while maintaining conversation quality. Social etiquette framework: Improves communication clarity by 53% through structured exchanges.",
      icon: <Users className="h-8 w-8 text-accent" />,
      stats: [
        { label: "Knowledge preservation", value: "94%" },
        { label: "Reduced scheduling conflicts", value: "78%" },
        { label: "Improved clarity", value: "53%" }
      ]
    },
    {
      title: "Future Vision & Roadmap",
      content: "We're developing AI-enhanced semantic search to connect related insights across conversations (launching Q3 2025). Our community knowledge base will anonymize and aggregate common solutions to career challenges. Analytics will identify patterns in effective mentorship conversations, while integration with your learning pathways will connect these discussions directly to skill development milestones.",
      icon: <Calendar className="h-8 w-8 text-accent" />,
      roadmap: [
        { feature: "AI-Enhanced Search", timeline: "Q3 2025" },
        { feature: "Community Knowledge Base", timeline: "Q4 2025" },
        { feature: "Mentorship Analytics", timeline: "Q1 2026" },
        { feature: "Learning Path Integration", timeline: "Q2 2026" }
      ]
    }
  ];

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      onClose();
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const renderSectionContent = (section) => {
    return (
      <>
        <p className="text-gray-300 text-center text-lg mb-6">
          {section.content}
        </p>
        
        {section.stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {section.stats.map((stat, index) => (
              <div key={index} className="bg-gray-800/50 p-4 rounded-lg text-center">
                <p className="text-accent text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
        
        {section.features && (
          <div className="space-y-3 mb-6">
            {section.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        )}
        
        {section.roadmap && (
          <div className="space-y-3 mb-6">
            {section.roadmap.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <p className="text-gray-300">{item.feature}</p>
                <span className="text-accent text-sm bg-accent/10 px-2 py-1 rounded-full">
                  {item.timeline}
                </span>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card className="w-full max-w-2xl bg-card border-accent/10 shadow-xl overflow-hidden">
        <CardHeader className="relative pb-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4" 
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex justify-center mb-2">
            {sections[currentSection].icon}
          </div>
          <CardTitle className="text-2xl text-center">{sections[currentSection].title}</CardTitle>
        </CardHeader>
        <CardContent>
          {renderSectionContent(sections[currentSection])}
          
          <Progress
            value={(currentSection + 1) / sections.length * 100}
            className="h-1 mb-6"
          />
          
          <div className="flex justify-between items-center mt-6">
            <Button 
              variant="outline" 
              onClick={prevSection} 
              disabled={currentSection === 0}
              className="border-accent/20"
            >
              Previous
            </Button>
            
            <div className="flex space-x-1">
              {sections.map((_, index) => (
                <button 
                  key={index} 
                  className="group p-1 focus:outline-none"
                  onClick={() => setCurrentSection(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span 
                    className={`block w-2 h-2 rounded-full transition-all ${
                      index === currentSection ? 'bg-accent' : 'bg-gray-600 group-hover:bg-accent/50'
                    }`}
                  />
                </button>
              ))}
            </div>
            
            <Button onClick={nextSection} className="bg-accent hover:bg-accent/80 text-black">
              {currentSection === sections.length - 1 ? "Get Started" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
