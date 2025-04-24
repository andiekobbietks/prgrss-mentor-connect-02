
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Users, User, Calendar, MessageSquare, Settings } from "lucide-react";
import { TourTarget } from "./TourTarget";
import { TourOverlay } from "./TourOverlay";

export default function AppLayout() {
  const location = useLocation();
  
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex-1" /> {/* Spacer */}
        <div className="flex items-center">
          <h1 className="text-2xl tracking-wider font-light">PRGRSS</h1>
        </div>
        <div className="flex-1 flex justify-end">
          <Link to="/settings">
            <Settings className="text-white h-6 w-6" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <TourTarget id="navigation-tabs" className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10 py-4">
        <div className="flex justify-around items-center px-6">
          <Link to="/">
            <Home className={`nav-icon ${location.pathname === '/' ? 'active' : ''}`} />
          </Link>
          <Link to="/community">
            <Users className={`nav-icon ${location.pathname === '/community' ? 'active' : ''}`} />
          </Link>
          <TourTarget id="profile-icon" className="relative -mt-8">
            <Link to="/profile">
              <div className="bg-accent rounded-full p-4">
                <User className="h-6 w-6 text-black" />
              </div>
            </Link>
          </TourTarget>
          <Link to="/call-history">
            <Calendar className={`nav-icon ${location.pathname === '/call-history' ? 'active' : ''}`} />
          </Link>
          <TourTarget id="messaging-icon">
            <Link to="/chat">
              <MessageSquare className={`nav-icon ${location.pathname === '/chat' ? 'active' : ''}`} />
            </Link>
          </TourTarget>
        </div>
      </TourTarget>

      {/* Tour Overlay - will be visible when tour is active */}
      <TourOverlay />
    </div>
  );
}
