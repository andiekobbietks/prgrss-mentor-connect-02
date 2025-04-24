
import React from 'react';
import { LogOut, Video, Shield, Lock, AlertTriangle } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Link to="/" className="flex items-center gap-4 p-4 bg-[#2A2A2A] rounded-lg">
          <LogOut className="w-6 h-6 text-[#E5B884]" />
          <span className="text-[#E5B884] font-semibold">LOG OUT</span>
        </Link>

        <Link to="/call-history" className="flex items-center gap-4 p-4 bg-[#2A2A2A] rounded-lg">
          <Video className="w-6 h-6 text-[#E5B884]" />
          <span className="text-[#E5B884] font-semibold">CALL HISTORY</span>
        </Link>

        <Link to="/safeguarding" className="flex items-center gap-4 p-4 bg-[#2A2A2A] rounded-lg">
          <Shield className="w-6 h-6 text-[#E5B884]" />
          <span className="text-[#E5B884] font-semibold">SAFEGUARDING</span>
        </Link>

        <Link to="/privacy" className="flex items-center gap-4 p-4 bg-[#2A2A2A] rounded-lg">
          <Lock className="w-6 h-6 text-[#E5B884]" />
          <span className="text-[#E5B884] font-semibold">PRIVACY POLICY</span>
        </Link>

        <Link to="/report" className="flex items-center gap-4 p-4 bg-[#2A2A2A] rounded-lg">
          <AlertTriangle className="w-6 h-6 text-[#E5B884]" />
          <span className="text-[#E5B884] font-semibold">REPORT</span>
        </Link>
      </div>
    </div>
  );
}
