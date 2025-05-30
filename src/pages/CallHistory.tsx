
import React from 'react';
import { ChevronLeft, MessageCircle } from "lucide-react";
import { Link } from 'react-router-dom';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CallHistory() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-4 flex items-center">
        <Link to="/" className="mr-4">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold text-[#E5B884]">CALL HISTORY</h1>
      </header>

      <div className="p-4 space-y-6">
        <div className="bg-[#2A2A2A] rounded-lg p-4 mb-4">
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold">CPD ACCREDITATION</h2>
            <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
              <div className="w-0 bg-[#E5B884] h-full rounded-full" />
            </div>
            <p className="text-right mt-1">0%</p>
          </div>
        </div>

        <Card className="bg-[#1A1A1A] border border-[#2A2A2A]">
          <div className="p-4">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-16 w-16">
                <img src="/lovable-uploads/2c62d6b1-86bc-4b5f-8dd9-d1de668bc098.png" alt="Lara M." />
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-[#E5B884]">Lara M.</h3>
                <p className="text-sm text-gray-400">Date: 2025-04-21</p>
                <p className="text-sm text-gray-400">Time: 16:08</p>
                <p className="text-sm text-gray-400">Duration: 1 minutes</p>
              </div>
            </div>
            <Button variant="outline" className="w-full border-[#E5B884] text-[#E5B884] hover:bg-[#E5B884] hover:text-black">
              Report
            </Button>
          </div>
          
          <Separator className="bg-[#2A2A2A]" />
          
          <div className="p-4">
            <h4 className="text-sm font-medium mb-2">Discussion Options</h4>
            <div className="space-y-3">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-sm"
                onClick={() => {}}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Instant Chat (for tangential topics)
              </Button>
              
              <Link to="/call-library">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-sm"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Continue in Call Library (for relevant follow-ups)
                </Button>
              </Link>
            </div>
          </div>
        </Card>
        
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4">
          <h3 className="text-md font-medium mb-2">Thread Relevance Reminder</h3>
          <p className="text-sm text-gray-400">
            For discussions related to previous calls, use the Call Library to maintain thread relevance. 
            For new or tangential topics, start a new instant chat or schedule another call.
          </p>
        </div>
      </div>
    </div>
  );
}
