
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight, Share, Layers, MessageCircle, Users, ArrowUpDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

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
  },
  {
    id: 5,
    title: "The Essence of Modern Mentorship",
    description: "Learn about Robert Smith's research on bi-directional mentorship and the Essence approach.",
    lessons: 4,
    completedLessons: 0,
    tags: ["Advanced", "Mentorship"],
    estimatedTime: "20 min",
    image: "/lovable-uploads/25592c32-e5be-443a-a77f-dba237cf6573.png"
  },
  {
    id: 6,
    title: "Call Library Strategy & Philosophy",
    description: "Understand the philosophy behind the Call Library and how to maximize its value.",
    lessons: 3,
    completedLessons: 0,
    tags: ["Intermediate", "Strategy"],
    estimatedTime: "15 min",
    image: "/lovable-uploads/25592c32-e5be-443a-a77f-dba237cf6573.png"
  }
];

// Updated EssenceApproachContent to prominently feature Reverse Mentorship
const EssenceApproachContent = () => {
  const [activeTab, setActiveTab] = useState<"essence" | "reverse">("essence");
  
  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-6">
        <Button 
          variant={activeTab === 'essence' ? "default" : "outline"} 
          onClick={() => setActiveTab('essence')}
          className="flex-1"
        >
          <Users className="h-4 w-4 mr-2" />
          The Essence Approach
        </Button>
        <Button 
          variant={activeTab === 'reverse' ? "default" : "outline"} 
          onClick={() => setActiveTab('reverse')}
          className="flex-1"
        >
          <ArrowUpDown className="h-4 w-4 mr-2" />
          Reverse Mentorship
        </Button>
      </div>

      {activeTab === "essence" && (
        <>
          <h2 className="text-2xl font-bold text-white">The Essence Approach to Modern Mentorship</h2>
          
          <div className="bg-secondary/20 rounded-lg p-6 border border-accent/20">
            <h3 className="text-xl font-medium text-accent mb-4">What is the "Essence" Approach?</h3>
            <p className="text-gray-300 mb-4">
              The "Essence" approach, highlighted in Robert F. Smith's research, recognizes that traditional top-down mentorship 
              is evolving into more collaborative, bi-directional relationships between mentors and mentees.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-secondary/30 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-accent" />
                  <h4 className="font-medium text-white">Peer Mentorship</h4>
                </div>
                <p className="text-sm text-gray-400">
                  According to Essence, 44% of workers today prefer peer mentorship, creating more horizontal learning opportunities.
                </p>
                <p className="text-xs text-accent mt-2">
                  This means nearly half of professionals find more value in learning from colleagues at similar career stages.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="h-5 w-5 text-accent" />
                  <h4 className="font-medium text-white">Two-Way Growth</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Nearly 70% of Gen Z and millennial workers believe mentoring should be a two-way street of mutual learning.
                </p>
                <p className="text-xs text-accent mt-2">
                  This represents a fundamental shift from the traditional mentorship paradigm toward collaborative growth.
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-black/30 p-4 rounded-lg">
              <h4 className="font-medium text-accent mb-2">Key Research Findings</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>72% of companies using reverse mentoring programs reported better cross-generational collaboration and communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Women in peer mentoring programs are 20% more likely to get promoted than those without such support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Black women are 24% less likely than white men to have a mentor, highlighting the equity gap that new mentorship models can help address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Implementation rates increase by 58% when mentorship follows a structured acknowledgment approach</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-secondary/20 rounded-lg p-6 border border-accent/20">
            <h3 className="text-xl font-medium text-accent mb-4">Applying the Essence Approach in PRGRSS</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-accent/20 rounded-full p-2 mt-1">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Call Library Thread System</h4>
                  <p className="text-sm text-gray-400">
                    Our thread system implements the Essence approach by requiring acknowledgment before continuing conversations.
                    This creates mutual accountability and increases implementation rates by 58%.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-accent/20 rounded-full p-2 mt-1">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Peer Mentorship Circles</h4>
                  <p className="text-sm text-gray-400">
                    PRGRSS facilitates peer mentoring circles where members learn from each other's experiences,
                    work through challenges together, and build meaningful connections - increasing promotion chances by 20%.
                  </p>
                </div>
              </div>
              
              <Button variant="outline" className="mt-4 w-full">
                <Link to="/call-library" className="w-full flex items-center justify-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Explore the Call Library
                </Link>
              </Button>
            </div>
          </div>
        </>
      )}

      {activeTab === "reverse" && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Reverse Mentorship</h2>
            <div className="px-3 py-1 bg-accent/20 rounded-full text-accent text-xs">
              Featured by Robert F. Smith
            </div>
          </div>
          
          <div className="bg-secondary/20 rounded-lg p-6 border border-accent/20 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="rounded-full overflow-hidden w-16 h-16 flex-shrink-0">
                <img 
                  src="https://lovable-uploads/5c8929ae-5ec6-4ae4-98c3-d516bc8a4794.png" 
                  alt="Robert F. Smith" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">Robert F. Smith</h3>
                <p className="text-sm text-gray-400">Founder, Chairman and CEO at Vista Equity Partners</p>
                <p className="text-sm italic text-accent/80 mt-2">
                  "For years, traditional mentorship looked like a more senior leader with experience guiding a younger person. 
                  Today, we're seeing new forms of mentorship opening up even more opportunities for connection, growth and 
                  innovation in both directions."
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-medium text-accent mb-2 flex items-center gap-2">
                  <ArrowUpDown className="h-4 w-4" /> 
                  What is Reverse Mentorship?
                </h4>
                <p className="text-sm text-gray-300">
                  Reverse Mentorship is a model where younger or less-experienced professionals share their insights with more senior leaders, 
                  particularly in areas like technology, culture, and new ways of thinking. This flips the traditional mentorship 
                  model on its head, recognizing that valuable knowledge flows in multiple directions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-medium text-accent mb-2">A Powerful Exchange</h4>
                  <p className="text-sm text-gray-300">
                    Companies that embrace reverse mentorship are seeing stronger communication and collaboration across generations. 
                    This approach bridges generational divides and creates more inclusive workplaces.
                  </p>
                  <p className="text-xs text-white/70 mt-2 font-medium">
                    72% of companies using reverse mentoring programs reported better cross-generational collaboration.
                  </p>
                </div>
                
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h4 className="font-medium text-accent mb-2">Rise in Peer Mentorship</h4>
                  <p className="text-sm text-gray-300">
                    This model brings together professionals at similar stages of their careers to share experiences, 
                    build community and learn from one another, creating horizontal knowledge networks.
                  </p>
                  <p className="text-xs text-white/70 mt-2 font-medium">
                    44% of workers today prefer peer mentorship over traditional models.
                  </p>
                </div>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="font-medium text-accent mb-2">Lifting One Another Up</h4>
                <p className="text-sm text-gray-300">
                  These informal networks offer support, perspective, and real-time feedback that traditional 
                  one-on-one setups sometimes miss. They create safe spaces for vulnerability and authentic sharing.
                </p>
                <p className="text-xs text-white/70 mt-2">
                  <span className="font-medium">Impact in numbers:</span> Women in peer mentoring programs are 20% more likely to get 
                  promoted than those without such support.
                </p>
              </div>
            </div>
            
            <div className="mt-6 border-t border-white/10 pt-6">
              <h4 className="font-medium text-white mb-3">Implementing Reverse Mentorship</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-accent/20 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs font-medium">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Create Structured Exchanges</p>
                    <p className="text-xs text-gray-400">
                      Formalize the reverse mentorship process with clear objectives, meeting cadences, and topics for discussion.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/20 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs font-medium">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Focus on Specific Knowledge Areas</p>
                    <p className="text-xs text-gray-400">
                      Identify areas where junior team members can offer unique insights: digital trends, emerging technologies, or cultural shifts.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/20 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs font-medium">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Create Psychological Safety</p>
                    <p className="text-xs text-gray-400">
                      Establish ground rules that encourage open dialogue where hierarchies are temporarily suspended.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/20 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs font-medium">4</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Document and Share Learnings</p>
                    <p className="text-xs text-gray-400">
                      Use the Call Library to capture insights from reverse mentorship exchanges, creating a knowledge base that benefits the entire organization.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-secondary/20 rounded-lg p-6 border border-accent/20">
            <h3 className="text-xl font-medium text-accent mb-4">Case Studies: Reverse Mentorship in Action</h3>
            
            <div className="space-y-6">
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Tech Industry: Closing Digital Divides</h4>
                <p className="text-sm text-gray-300">
                  A major tech company implemented a reverse mentorship program where Gen Z employees taught senior executives 
                  about emerging social media platforms and digital trends. Within six months, the company reported a 32% increase 
                  in digital engagement metrics and more culturally relevant product features.
                </p>
              </div>
              
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="font-medium text-white mb-2">Financial Services: DEI Insights</h4>
                <p className="text-sm text-gray-300">
                  A financial institution paired senior leaders with employees from underrepresented backgrounds for reverse 
                  mentoring on inclusion. This led to concrete policy changes and a 27% increase in sense of belonging among 
                  minority employees within one year.
                </p>
              </div>
              
              <Button variant="default" className="mt-4 w-full">
                <Link to="/call-library" className="w-full flex items-center justify-center gap-2">
                  <ArrowUpDown className="h-4 w-4" />
                  Apply Reverse Mentorship in the Call Library
                </Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const LearningAcademy = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTab, setActiveTab] = useState<"modules" | "essence">("modules");
  const { toast } = useToast();
  
  const filterModules = (modules: typeof learningModules) => {
    if (activeFilter === "all") return modules;
    if (activeFilter === "inProgress") return modules.filter(m => m.completedLessons > 0 && m.completedLessons < m.lessons);
    if (activeFilter === "completed") return modules.filter(m => m.completedLessons === m.lessons);
    if (activeFilter === "notStarted") return modules.filter(m => m.completedLessons === 0);
    return modules;
  };
  
  const handleEssenceModule = () => {
    toast({
      title: "Module Started",
      description: "The Essence Approach module has been started.",
    });
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
        
        <Tabs defaultValue="modules" className="mb-8" onValueChange={(value) => setActiveTab(value as "modules" | "essence")}>
          <TabsList className="mb-4">
            <TabsTrigger value="modules" className="px-4">Learning Modules</TabsTrigger>
            <TabsTrigger value="essence" className="px-4">Essence Approach</TabsTrigger>
          </TabsList>
          
          <TabsContent value="modules">
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
                      <div className="flex flex-wrap gap-2 mt-3">
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
                      <Button 
                        className="w-full group" 
                        onClick={module.id === 5 ? handleEssenceModule : undefined}
                      >
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
          </TabsContent>
          
          <TabsContent value="essence">
            <EssenceApproachContent />
          </TabsContent>
        </Tabs>
        
        {activeTab === "modules" && (
          <div className="rounded-lg bg-card border border-accent/10 p-6">
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
        )}
      </motion.div>
    </div>
  );
};

export default LearningAcademy;
