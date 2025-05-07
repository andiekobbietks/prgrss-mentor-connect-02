
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Chat from './pages/Chat';
import Community from './pages/Community';
import CallHistory from './pages/CallHistory';
import NotFound from './pages/NotFound';
import UserGuide from './pages/UserGuide';
import { TourProvider } from './contexts/TourContext';
import { TourOverlay } from './components/TourOverlay';
import { SplashScreen } from './components/SplashScreen';
import './App.css';

function AppWithProviders() {
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
        <AppWithProviders />
      </TourProvider>
    </Router>
  );
}

export default App;
