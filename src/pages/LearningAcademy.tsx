
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight, Share } from 'lucide-react';
import { Link } from 'react-router-dom';

// Synthetic data for Learning Academy modules
const learningModules = [
  {
    id: 1,
    title: "Getting Started with PRGRSS",
    description: "Learn the basics of the PRGRSS platform and how to set up your profile.",
    lessons: 4,
    completedLessons: 2,
    tags: ["Beginner", "Setup"],
    estimatedTime: "15 min",
    image: "/lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png"
  },
  {
    id: 2,
    title: "Effective Mentorship Techniques",
    description: "Master the art of micro-mentorship and effective communication in short timeframes.",
    lessons: 5,
    completedLessons: 0,
    tags: ["Intermediate", "Mentorship"],
    estimatedTime: "25 min",
    image: "/lovable-uploads/7d22c068-12ab-4357-a8e7-9acc400d16b4.png"
  },
  {
    id: 3,
    title: "Maximizing Your Learning",
    description: "Strategies to get the most value from your mentorship sessions as a mentee.",
    lessons: 3,
    completedLessons: 1,
    tags: ["Beginner", "Strategy"],
    estimatedTime: "12 min",
    image: "/lovable-uploads/92da60df-11bb-4b5b-9610-fdf05ae04823.png"
  },
  {
    id: 4,
    title: "Advanced Platform Features",
    description: "Explore advanced features and settings to customize your PRGRSS experience.",
    lessons: 6,
    completedLessons: 0,
    tags: ["Advanced", "Features"],
    estimatedTime: "30 min",
    image: "/lovable-uploads/2c62d6b1-86bc-4b5f-8dd9-d1de668bc098.png"
  }
];

const LearningAcademy = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filterModules = (modules: typeof learningModules) => {
    if (activeFilter === "all") return modules;
    if (activeFilter === "inProgress") return modules.filter(m => m.completedLessons > 0 && m.completedLessons < m.lessons);
    if (activeFilter === "completed") return modules.filter(m => m.completedLessons === m.lessons);
    if (activeFilter === "notStarted") return modules.filter(m => m.completedLessons === 0);
    return modules;
  };
  
  const filteredModules = filterModules(learningModules);

  return (
    <div className="bg-black min-h-screen pb-20 px-4 pt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-accent" />
            Learning Academy
          </h1>
          <Link to="/" className="text-gray-400 hover:text-accent">
            Back to Home
          </Link>
        </div>
        <p className="text-gray-400 mb-6">
          Enhance your micro-mentorship skills with our self-paced learning modules.
        </p>
        
        {/* Filter buttons */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
          <Button 
            variant={activeFilter === "all" ? "default" : "outline"} 
            onClick={() => setActiveFilter("all")}
            size="sm"
          >
            All Modules
          </Button>
          <Button 
            variant={activeFilter === "inProgress" ? "default" : "outline"} 
            onClick={() => setActiveFilter("inProgress")}
            size="sm"
          >
            In Progress
          </Button>
          <Button 
            variant={activeFilter === "notStarted" ? "default" : "outline"} 
            onClick={() => setActiveFilter("notStarted")}
            size="sm"
          >
            Not Started
          </Button>
          <Button 
            variant={activeFilter === "completed" ? "default" : "outline"} 
            onClick={() => setActiveFilter("completed")}
            size="sm"
          >
            Completed
          </Button>
        </div>
      </motion.div>

      {/* Learning modules grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {filteredModules.map((module) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: module.id * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="bg-card border-accent/10 overflow-hidden">
              {module.image && (
                <div className="h-32 overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium">{module.title}</CardTitle>
                  <div className="text-xs text-gray-400">{module.estimatedTime}</div>
                </div>
                <CardDescription className="text-sm text-gray-400">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                  <span>{module.completedLessons} of {module.lessons} lessons complete</span>
                  <span>{Math.round((module.completedLessons / module.lessons) * 100)}%</span>
                </div>
                <Progress value={(module.completedLessons / module.lessons) * 100} className="h-1" />
                <div className="flex gap-2 mt-3">
                  {module.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-accent/10 text-accent text-xs py-1 px-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full group">
                  <span className="mr-2">
                    {module.completedLessons === 0 ? "Start Learning" : 
                     module.completedLessons === module.lessons ? "Review Module" : "Continue Learning"}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Featured Section */}
      <div className="rounded-lg bg-card border border-accent/10 p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Featured Webinar</h2>
        <div className="aspect-video bg-black/50 rounded mb-4 flex items-center justify-center">
          <div className="text-accent">
            <Share className="w-12 h-12" />
          </div>
        </div>
        <h3 className="text-lg font-medium mb-1">Making the Most of Micro-Mentorships</h3>
        <p className="text-sm text-gray-400 mb-4">
          Join our expert panel as they discuss strategies for effective micro-mentorship conversations
          and how to build lasting professional relationships.
        </p>
        <Button variant="outline" className="w-full">
          Register for Webinar
        </Button>
      </div>
    </div>
  );
};

export default LearningAcademy;
