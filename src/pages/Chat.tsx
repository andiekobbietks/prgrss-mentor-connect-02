
import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { ChevronLeft, Send, Info } from "lucide-react";
import { Link } from 'react-router-dom';
import { TourTarget } from "@/components/TourTarget";
import { useTour } from "@/contexts/TourContext";
import { motion } from 'framer-motion';

export default function Chat() {
  const { startTour } = useTour();
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center">
          <Link to="/" className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <img src="/lovable-uploads/2c62d6b1-86bc-4b5f-8dd9-d1de668bc098.png" alt="Test Mentee" />
            </Avatar>
            <h1 className="text-xl font-semibold">Test Mentee</h1>
          </div>
        </div>
        <button onClick={startTour} className="text-accent">
          <Info className="h-5 w-5" />
        </button>
      </header>

      <div className="flex-1 p-4">
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm text-gray-400 mb-4"
        >
          <TourTarget id="messaging-icon">
            You can send 1 message today
          </TourTarget>
        </motion.div>

        <div className="text-center text-sm text-gray-400 border-t border-b border-gray-800 py-2 my-4">
          This is the start of your conversation with Test
        </div>

        <div className="text-center text-sm text-gray-400 my-4">
          2025-04-22, Tuesday
        </div>

        <div className="bg-[#2A2A2A] rounded-lg p-4 max-w-[80%] ml-auto mb-4">
          Hi, I'm available for a 12-minute video mentorship call this week feel free to schedule a call.
          <div className="text-xs text-gray-400 text-right mt-1">01:47 PM ✓</div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-amber-800/20 border border-amber-700/30 rounded-lg p-3 my-6 text-center"
        >
          <p className="text-sm text-amber-200">Messaging limitations apply based on call status</p>
          <p className="text-xs text-amber-300/70 mt-1">After call: 5 msgs/day • Scheduled call: 3 msgs/day • No calls: Limited messages</p>
        </motion.div>
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Your message"
            className="flex-1 bg-[#2A2A2A] rounded-full px-4 py-2 text-white"
          />
          <button className="p-2 rounded-full bg-[#2A2A2A]">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
