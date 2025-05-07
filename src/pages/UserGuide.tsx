
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import GuideSection from '../components/GuideSection';
import { Calendar, MessageSquare, Clock, Info } from 'lucide-react';
import { useTour } from '@/contexts/TourContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const UserGuide = () => {
  const [activeTab, setActiveTab] = useState('mentors');
  const { startTour } = useTour();
  
  const mentorSteps = [
    {
      title: "Welcome to the Platform",
      description: "Welcome to PRGRSS! You're now part of a mission to guide and empower the next generation of diverse talent.",
      tourId: "welcome"
    },
    {
      title: "Sync Your Calendar",
      description: "To get started, sync your calendar to allow smooth scheduling of your availability and calls.",
      tourId: "calls"
    },
    {
      title: "Set Your Availability",
      description: "Tell us when you're available during the week. We'll notify you when a young person books a session."
    },
    {
      title: "Join Your Call",
      description: "On the day of your scheduled call, go to your dashboard and select 'Join Call'. Calls can only be joined within the first 5 minutes.",
      tourId: "calls"
    },
    {
      title: "Provide Feedback",
      description: "After the session, submit feedback about your experience. This helps us support you and the mentee better.",
      tourId: "feedback"
    },
    {
      title: "Update Your Availability",
      description: "Regularly update your calendar to stay accessible to mentees."
    }
  ];

  const mentorRules = [
    { description: "Two missed (no-show) calls will result in a 1-month restriction from booking further calls." },
    { description: "Calls must be joined within the first 5 minutes." }
  ];

  const mentorLimitations = [
    {
      title: "Call Booking & Management",
      icon: <Calendar className="h-5 w-5 text-accent" />,
      items: [
        { label: "Monthly call limit", value: "3-10 calls" },
        { label: "Maximum reschedules", value: "5 per month" },
        { label: "Maximum cancellations", value: "4 per month" },
        { label: "No-show policy", value: "Blocked for 30 days after 2 no-shows" }
      ]
    },
    {
      title: "Messaging Limitations",
      icon: <MessageSquare className="h-5 w-5 text-accent" />,
      items: [
        { label: "After completed meeting (3 days)", value: "5 messages per day" },
        { label: "Upcoming meeting (next 7 days)", value: "3 messages per day" },
        { label: "No meetings scheduled", value: "1 message per day" },
        { label: "Meeting beyond next 7 days", value: "No messages allowed" }
      ]
    },
    {
      title: "Call Session Rules",
      icon: <Clock className="h-5 w-5 text-accent" />,
      items: [
        { label: "Earliest join time", value: "15 seconds before call" },
        { label: "Latest join time", value: "5 minutes after call starts" }
      ]
    }
  ];

  const menteeSteps = [
    {
      title: "Welcome to the Platform",
      description: "Welcome to PRGRSS! Your journey to personal growth and career development begins now.",
      tourId: "welcome"
    },
    {
      title: "Review Your Mentor Matches",
      description: "Check out your mentor recommendations based on your goals and background.",
      tourId: "profile"
    },
    {
      title: "Book Your Monthly Calls",
      description: "Schedule up to 2 calls per month. Use these wisely and come prepared.",
      tourId: "calls"
    },
    {
      title: "Prepare and Join the Call",
      description: "Be ready for your session. Go to your dashboard to join on time (within the first 5 minutes)."
    },
    {
      title: "Provide Feedback",
      description: "Share feedback after your call. It helps us and your mentor improve your experience.",
      tourId: "feedback"
    },
    {
      title: "Code of Conduct",
      description: "Contacting mentors outside of PRGRSS is not allowed. Respect your mentor's time and commitment.",
      tourId: "messaging"
    }
  ];

  const menteeRules = [
    { description: "Two no-shows will pause your access to scheduling for one month." },
    { description: "Join your call within the first 5 minutes." }
  ];

  const menteeLimitations = [
    {
      title: "Call Booking & Management",
      icon: <Calendar className="h-5 w-5 text-accent" />,
      items: [
        { label: "Monthly call limit", value: "2 calls" },
        { label: "Maximum reschedules", value: "2 per month" },
        { label: "Maximum cancellations", value: "2 per month" },
        { label: "No-show policy", value: "Blocked for 60 days after 1 no-show" }
      ]
    },
    {
      title: "Messaging Limitations",
      icon: <MessageSquare className="h-5 w-5 text-accent" />,
      items: [
        { label: "After completed meeting (3 days)", value: "5 messages per day" },
        { label: "Upcoming meeting (next 7 days)", value: "3 messages per day" },
        { label: "If mentor messaged in last 3 days", value: "3 messages per day" },
        { label: "Meeting beyond next 7 days", value: "No messages allowed" }
      ]
    },
    {
      title: "Call Session Rules",
      icon: <Clock className="h-5 w-5 text-accent" />,
      items: [
        { label: "Earliest join time", value: "15 seconds before call" },
        { label: "Latest join time", value: "5 minutes after call starts" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="container max-w-3xl px-4 py-8 md:py-12">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">PRGRSS User Guide</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            This guide will help you get started with PRGRSS, whether you're a mentor or mentee.
          </p>
          
          <div className="flex justify-center mt-6">
            <Button 
              onClick={startTour}
              className="bg-accent hover:bg-accent/90 text-black flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <Info className="h-4 w-4" />
              Take Interactive Tour
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="backdrop-blur-sm bg-secondary/40 rounded-xl border border-white/10 shadow-lg overflow-hidden"
        >
          <Tabs defaultValue="mentors" className="w-full" onValueChange={setActiveTab}>
            <div className="border-b border-white/10">
              <TabsList className="w-full grid grid-cols-2 bg-black/40">
                <TabsTrigger
                  value="mentors"
                  className={`py-4 text-base font-medium transition-colors ${
                    activeTab === 'mentors' 
                      ? 'text-accent' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  For Mentors
                </TabsTrigger>
                <TabsTrigger
                  value="mentees"
                  className={`py-4 text-base font-medium transition-colors ${
                    activeTab === 'mentees' 
                      ? 'text-accent' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  For Mentees
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="mentors" className="pt-2 pb-6">
              <GuideSection
                title="Guide for Mentors"
                steps={mentorSteps}
                rules={mentorRules}
                limitations={mentorLimitations}
              />
            </TabsContent>

            <TabsContent value="mentees" className="pt-2 pb-6">
              <GuideSection
                title="Guide for Mentees"
                steps={menteeSteps}
                rules={menteeRules}
                limitations={menteeLimitations}
              />
            </TabsContent>
          </Tabs>
        </motion.div>
        
        <div className="mt-8 text-center text-xs text-gray-500">
          © 2025 PRGRSS. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
