
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Chat from './pages/Chat';
import Community from './pages/Community';
import CallHistory from './pages/CallHistory';
import NotFound from './pages/NotFound';
import UserGuide from './pages/UserGuide';
import LearningAcademy from './pages/LearningAcademy';
import CallLibrary from './pages/CallLibrary';
import { TourProvider, useTour } from './contexts/TourContext';
import { TourOverlay } from './components/TourOverlay';
import { SplashScreen } from './components/SplashScreen';
import './App.css';

function AppContent() {
  const location = useLocation();
  const { isFirstVisit, showStartScreen } = useTour();
  
  useEffect(() => {
    // Add special class to body when splash screen is shown
    if (showStartScreen) {
      document.body.classList.add('splash-active');
    } else {
      document.body.classList.remove('splash-active');
    }
    
    return () => {
      document.body.classList.remove('splash-active');
    };
  }, [showStartScreen]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="chat" element={<Chat />} />
          <Route path="community" element={<Community />} />
          <Route path="call-history" element={<CallHistory />} />
          <Route path="guide" element={<UserGuide />} />
          <Route path="learning-academy" element={<LearningAcademy />} />
          <Route path="call-library" element={<CallLibrary />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <TourOverlay />
      <SplashScreen />
    </>
  );
}

function App() {
  return (
    <Router>
      <TourProvider>
        <AppContent />
      </TourProvider>
    </Router>
  );
}

export default App;
