
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CallLibraryExplainer } from '@/components/call-library/CallLibraryExplainer';
import { CallLibraryHeader } from '@/components/call-library/CallLibraryHeader';
import { CallLibraryGuide } from '@/components/call-library/CallLibraryGuide';
import { CallLibrarySearch } from '@/components/call-library/CallLibrarySearch';
import { CallLibraryList } from '@/components/call-library/CallLibraryList';
import { sampleCallData } from '@/types/CallLibraryTypes';

// Categories for filtering
const categories = ["All", "Career Development", "Leadership", "Technical Skills", "Interview Prep"];

const CallLibrary = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showExplainer, setShowExplainer] = useState(true);
  const userId = "mentee1"; // In a real app, this would come from authentication
  const userRole = "mentee" as 'mentor' | 'mentee' | 'admin'; // Explicitly typed as the union type
  
  // Check if this is the first visit to the call library
  useEffect(() => {
    const hasSeenExplainer = localStorage.getItem('hasSeenCallLibraryExplainer');
    if (hasSeenExplainer) {
      setShowExplainer(false);
    }
  }, []);

  const handleCloseExplainer = () => {
    setShowExplainer(false);
    localStorage.setItem('hasSeenCallLibraryExplainer', 'true');
  };
  
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
      <AnimatePresence>
        {showExplainer && (
          <CallLibraryExplainer onClose={handleCloseExplainer} />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <CallLibraryHeader hasUnreadComments={hasUnreadComments} />
        
        <CallLibraryGuide onOpenExplainer={() => setShowExplainer(true)} />
        
        <CallLibrarySearch 
          categories={categories}
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          setActiveCategory={setActiveCategory}
          setSearchQuery={setSearchQuery}
        />
      </motion.div>

      <CallLibraryList
        filteredCalls={filteredCalls}
        userRole={userRole}
        userId={userId}
      />
    </div>
  );
};

export default CallLibrary;
