
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import GuideSection from '../components/GuideSection';

const UserGuide = () => {
  const [activeTab, setActiveTab] = useState('mentors');
  
  const mentorSteps = [
    {
      title: "Welcome to the Platform",
      description: "Welcome to PRGRSS! You're now part of a mission to guide and empower the next generation of diverse talent."
    },
    {
      title: "Sync Your Calendar",
      description: "To get started, sync your calendar to allow smooth scheduling of your availability and calls."
    },
    {
      title: "Set Your Availability",
      description: "Tell us when you're available during the week. We'll notify you when a young person books a session."
    },
    {
      title: "Join Your Call",
      description: "On the day of your scheduled call, go to your dashboard and select 'Join Call'. Calls can only be joined within the first 5 minutes."
    },
    {
      title: "Provide Feedback",
      description: "After the session, submit feedback about your experience. This helps us support you and the mentee better."
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

  const menteeSteps = [
    {
      title: "Welcome to the Platform",
      description: "Welcome to PRGRSS! Your journey to personal growth and career development begins now."
    },
    {
      title: "Review Your Mentor Matches",
      description: "Check out your mentor recommendations based on your goals and background."
    },
    {
      title: "Book Your Monthly Calls",
      description: "Schedule up to 2 calls per month. Use these wisely and come prepared."
    },
    {
      title: "Prepare and Join the Call",
      description: "Be ready for your session. Go to your dashboard to join on time (within the first 5 minutes)."
    },
    {
      title: "Provide Feedback",
      description: "Share feedback after your call. It helps us and your mentor improve your experience."
    },
    {
      title: "Code of Conduct",
      description: "Contacting mentors outside of PRGRSS is not allowed. Respect your mentor's time and commitment."
    }
  ];

  const menteeRules = [
    { description: "Two no-shows will pause your access to scheduling for one month." },
    { description: "Join your call within the first 5 minutes." }
  ];

  return (
    <div className="container max-w-3xl px-4 py-6 md:py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">PRGRSS User Guide</h1>
      <p className="text-center text-gray-600 mb-8">
        This guide will help you get started with PRGRSS, whether you're a mentor or mentee.
      </p>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <Tabs defaultValue="mentors" className="w-full" onValueChange={setActiveTab}>
          <div className="border-b">
            <TabsList className="w-full grid grid-cols-2 bg-gray-50">
              <TabsTrigger
                value="mentors"
                className={`py-3 text-base ${activeTab === 'mentors' ? 'font-medium text-primary' : 'text-gray-600'}`}
              >
                For Mentors
              </TabsTrigger>
              <TabsTrigger
                value="mentees"
                className={`py-3 text-base ${activeTab === 'mentees' ? 'font-medium text-primary' : 'text-gray-600'}`}
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
            />
          </TabsContent>

          <TabsContent value="mentees" className="pt-2 pb-6">
            <GuideSection
              title="Guide for Mentees"
              steps={menteeSteps}
              rules={menteeRules}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserGuide;
