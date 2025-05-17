
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CallDetail } from '@/components/call-library/CallDetail';
import { sampleCallData } from '@/types/CallLibraryTypes';

// Categories for filtering
const categories = ["All", "Career Development", "Leadership", "Technical Skills", "Interview Prep"];

const CallLibrary = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const userId = "mentee1"; // In a real app, this would come from authentication
  const userRole = "mentee"; // In a real app, this would come from authentication
  
  const filterCalls = () => {
    return sampleCallData.filter(call => {
      const matchesCategory = activeCategory === "All" || call.category === activeCategory;
      const matchesSearch = call.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          call.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };
  
  const filteredCalls = filterCalls();
  
  const hasUnreadComments = filteredCalls.some(call => 
    call.comments.some(comment => 
      !comment.isRead && comment.author.id !== userId
    )
  );

  return (
    <div className="bg-black min-h-screen pb-20 px-4 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-accent" />
            Call Library
            {hasUnreadComments && (
              <span className="bg-red-500 rounded-full h-2 w-2" />
            )}
          </h1>
          <Link to="/" className="text-gray-400 hover:text-accent flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>
        <p className="text-gray-400 mb-6">
          Review and continue valuable mentorship conversations with interactive threads.
        </p>
        
        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search for calls by topic, skill, or technique..."
            className="pl-10 bg-card border-accent/10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"} 
              onClick={() => setActiveCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Call Library entries */}
      <div className="space-y-6 mb-20">
        {filteredCalls.length === 0 ? (
          <div className="text-center py-16">
            <MessageSquare className="h-12 w-12 mx-auto text-gray-500 mb-4" />
            <h3 className="text-xl font-medium mb-2">No calls found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          filteredCalls.map((call) => (
            <motion.div
              key={call.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: parseFloat(call.id) * 0.1 }}
            >
              <CallDetail 
                call={call} 
                userRole={userRole}
                userId={userId}
              />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default CallLibrary;
