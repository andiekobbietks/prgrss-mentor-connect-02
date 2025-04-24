
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Home, User, Users, Calendar, MessageSquare, Settings } from "lucide-react";

export default function AppLayout() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-wider">PRGR<span className="text-gray-500">SS</span></h1>
        </div>
        <div>
          <Link to="/settings">
            <Settings className="text-white h-6 w-6" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-16">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 py-3">
        <div className="flex justify-around items-center">
          <Link to="/" className="flex flex-col items-center">
            <Home className="h-6 w-6 text-white" />
          </Link>
          <Link to="/community" className="flex flex-col items-center">
            <Users className="h-6 w-6 text-gray-500" />
          </Link>
          <Link to="/profile" className="flex flex-col items-center">
            <div className="bg-primary rounded-full p-3 -mt-8">
              <User className="h-6 w-6 text-white" />
            </div>
          </Link>
          <Link to="/call-history" className="flex flex-col items-center">
            <Calendar className="h-6 w-6 text-gray-500" />
          </Link>
          <Link to="/chat" className="flex flex-col items-center">
            <MessageSquare className="h-6 w-6 text-gray-500" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
