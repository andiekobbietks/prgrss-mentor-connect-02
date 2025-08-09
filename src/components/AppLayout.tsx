
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Users, User, Calendar, MessageSquare, Settings, Info } from "lucide-react";
import { TourTarget } from "./TourTarget";
import { TourOverlay } from "./TourOverlay";
import { useTour } from "@/contexts/TourContext";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CreditCoin } from "@/components/credits/CreditCoin";
import { useCredits } from "@/contexts/CreditsContext";

export default function AppLayout() {
  const location = useLocation();
  const { startTour, isFirstVisit } = useTour();
  const credits = useCredits();
  
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                onClick={startTour} 
                className="text-gray-400 hover:text-accent p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label="Restart Tour"
              >
                <Info className="h-5 w-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Restart Tour</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex items-center">
          <TourTarget id="welcome-logo">
            <h1 className="text-2xl tracking-wider font-light">PRGRSS</h1>
          </TourTarget>
        </div>
        <div className="flex-1 flex justify-end items-center gap-3">
          <TourTarget id="credit-coin">
            <CreditCoin
              role={credits.role}
              baseMonthlyCredits={credits.baseMonthlyCredits}
              adjustedMonthlyCredits={credits.adjustedMonthlyCredits}
              usedThisMonth={credits.usedThisMonth}
              cycleEndDate={credits.cycleEndDate}
            />
          </TourTarget>
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
            <Home className={`h-6 w-6 ${location.pathname === '/' ? 'text-accent' : 'text-gray-400'}`} />
          </Link>
          <Link to="/community">
            <Users className={`h-6 w-6 ${location.pathname === '/community' ? 'text-accent' : 'text-gray-400'}`} />
          </Link>
          <TourTarget id="profile-icon" className="relative -mt-8">
            <Link to="/profile">
              <div className="bg-accent rounded-full p-4">
                <User className="h-6 w-6 text-black" />
              </div>
            </Link>
          </TourTarget>
          <TourTarget id="calls-info">
            <Link to="/call-history">
              <Calendar className={`h-6 w-6 ${location.pathname === '/call-history' ? 'text-accent' : 'text-gray-400'}`} />
            </Link>
          </TourTarget>
          <TourTarget id="messaging-icon">
            <Link to="/chat">
              <MessageSquare className={`h-6 w-6 ${location.pathname === '/chat' ? 'text-accent' : 'text-gray-400'}`} />
            </Link>
          </TourTarget>
        </div>
      </TourTarget>
    </div>
  );
}
