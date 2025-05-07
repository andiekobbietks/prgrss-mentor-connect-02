
import React, { useState } from 'react';
import GuideTitle from '../components/user-guide/GuideTitle';
import GuideTabs from '../components/user-guide/GuideTabs';

const UserGuide = () => {
  const [activeTab, setActiveTab] = useState('mentors');
  
  return (
    <div className="min-h-screen bg-black">
      <div className="container max-w-3xl px-4 py-8 md:py-12">
        <GuideTitle />
        <GuideTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="mt-8 text-center text-xs text-gray-500">
          © 2025 PRGRSS. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
