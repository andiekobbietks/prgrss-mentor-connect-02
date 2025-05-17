
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface CallLibrarySearchProps {
  categories: string[];
  activeCategory: string;
  searchQuery: string;
  setActiveCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
}

export const CallLibrarySearch: React.FC<CallLibrarySearchProps> = ({
  categories,
  activeCategory,
  searchQuery,
  setActiveCategory,
  setSearchQuery,
}) => {
  return (
    <>
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
    </>
  );
};
