
import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import GuideSection from '../GuideSection';
import { getMentorData, getMenteeData } from './GuideData';

interface GuideTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const GuideTabs: React.FC<GuideTabsProps> = ({ activeTab, setActiveTab }) => {
  const mentorData = getMentorData();
  const menteeData = getMenteeData();

  return (
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
            steps={mentorData.steps}
            rules={mentorData.rules}
            limitations={mentorData.limitations}
          />
        </TabsContent>

        <TabsContent value="mentees" className="pt-2 pb-6">
          <GuideSection
            title="Guide for Mentees"
            steps={menteeData.steps}
            rules={menteeData.rules}
            limitations={menteeData.limitations}
          />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default GuideTabs;
