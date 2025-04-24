
import React from 'react';
import { LogOut, Video, Shield, Lock, AlertTriangle } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Link to="/" className="flex items-center gap-4 p-4 bg-secondary/80 rounded-lg backdrop-blur-sm">
          <LogOut className="w-6 h-6 text-accent" />
          <span className="text-accent font-semibold">LOG OUT</span>
        </Link>

        <Link to="/call-history" className="flex items-center gap-4 p-4 bg-secondary/80 rounded-lg backdrop-blur-sm">
          <Video className="w-6 h-6 text-accent" />
          <span className="text-accent font-semibold">CALL HISTORY</span>
        </Link>

        <Link to="/safeguarding" className="flex items-center gap-4 p-4 bg-secondary/80 rounded-lg backdrop-blur-sm">
          <Shield className="w-6 h-6 text-accent" />
          <span className="text-accent font-semibold">SAFEGUARDING</span>
        </Link>

        <Link to="/privacy" className="flex items-center gap-4 p-4 bg-secondary/80 rounded-lg backdrop-blur-sm">
          <Lock className="w-6 h-6 text-accent" />
          <span className="text-accent font-semibold">PRIVACY POLICY</span>
        </Link>

        <Link to="/report" className="flex items-center gap-4 p-4 bg-secondary/80 rounded-lg backdrop-blur-sm">
          <AlertTriangle className="w-6 h-6 text-accent" />
          <span className="text-accent font-semibold">REPORT</span>
        </Link>
      </div>
    </div>
  );
}
