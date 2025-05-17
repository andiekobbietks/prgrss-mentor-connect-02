
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Search, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Synthetic data for Call Library conversations
const callLibraryData = [
  {
    id: 1,
    title: "Career Transition Guidance",
    description: "A mentorship call focused on transitioning from engineering to product management.",
    category: "Career Development",
    duration: "12 min",
    techniques: ["Active Listening", "Strategic Questioning", "Action Planning"],
    rating: 4.8,
    reviewCount: 24,
    image: "/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
  },
  {
    id: 2,
    title: "Technical Interview Preparation",
    description: "Tips and practice for technical interviews in software development roles.",
    category: "Interview Prep",
    duration: "12 min",
    techniques: ["Mock Scenarios", "Feedback Delivery", "Knowledge Transfer"],
    rating: 4.5,
    reviewCount: 18,
    image: "/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png"
  },
  {
    id: 3,
    title: "Building an Effective Team",
    description: "Discussion on leadership strategies for building high-performing teams.",
    category: "Leadership",
    duration: "12 min",
    techniques: ["Mentorship Storytelling", "Experience Sharing", "Reflective Questioning"],
    rating: 4.9,
    reviewCount: 32,
    image: "/lovable-uploads/92da60df-11bb-4b5b-9610-fdf05ae04823.png"
  },
  {
    id: 4,
    title: "Negotiating Job Offers",
    description: "Strategies for negotiating compensation and benefits in job offers.",
    category: "Career Development",
    duration: "12 min",
    techniques: ["Role Playing", "Scenario Analysis", "Strategic Planning"],
    rating: 4.7,
    reviewCount: 15,
    image: "/lovable-uploads/2c62d6b1-86bc-4b5f-8dd9-d1de668bc098.png"
  }
];

const categories = ["All", "Career Development", "Leadership", "Technical Skills", "Interview Prep"];

const CallLibrary = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filterCalls = () => {
    return callLibraryData.filter(call => {
      const matchesCategory = activeCategory === "All" || call.category === activeCategory;
      const matchesSearch = call.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          call.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };
  
  const filteredCalls = filterCalls();

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
          </h1>
          <Link to="/" className="text-gray-400 hover:text-accent">
            Back to Home
          </Link>
        </div>
        <p className="text-gray-400 mb-6">
          Study exemplary mentorship conversations with interactive commentary and analysis.
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {filteredCalls.map((call) => (
          <motion.div
            key={call.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: call.id * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="bg-card border-accent/10 overflow-hidden">
              {call.image && (
                <div className="h-32 overflow-hidden">
                  <img 
                    src={call.image} 
                    alt={call.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium">{call.title}</CardTitle>
                  <div className="bg-accent/20 text-accent text-xs py-1 px-2 rounded-full">
                    {call.category}
                  </div>
                </div>
                <CardDescription className="text-sm text-gray-400">
                  {call.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-400">{call.duration} recording</span>
                  <span className="text-xs text-gray-400">
                    ★ {call.rating} ({call.reviewCount} reviews)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {call.techniques.map((technique) => (
                    <span 
                      key={technique} 
                      className="bg-secondary text-gray-300 text-xs py-1 px-2 rounded-full border border-white/5"
                    >
                      {technique}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="flex-1 mr-2">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Summary
                </Button>
                <Button className="flex-1 group">
                  <span className="mr-2">Watch & Learn</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Featured Technique Section */}
      <div className="rounded-lg bg-card border border-accent/10 p-6">
        <h2 className="text-xl font-bold mb-4">Featured Mentorship Technique</h2>
        <h3 className="text-lg font-medium mb-1">Powerful Questioning</h3>
        <p className="text-sm text-gray-400 mb-4">
          Unlock deeper insights and guide mentees to their own realizations through the art of
          asking powerful, open-ended questions that promote reflection and discovery.
        </p>
        <div className="bg-black/30 rounded-lg p-4 mb-4">
          <h4 className="font-medium mb-2">Example Questions:</h4>
          <ul className="list-disc list-inside text-sm text-gray-400">
            <li>"What would success look like for you in this situation?"</li>
            <li>"What's one assumption you're making that might be limiting your options?"</li>
            <li>"If resources weren't an issue, what would you do differently?"</li>
            <li>"What's the most important thing you learned from that experience?"</li>
          </ul>
        </div>
        <Button variant="outline" className="w-full">
          See Examples in Call Library
        </Button>
      </div>
    </div>
  );
};

export default CallLibrary;
