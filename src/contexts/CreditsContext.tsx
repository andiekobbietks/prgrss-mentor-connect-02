import React, { createContext, useContext, useMemo, useState, useCallback } from "react";
import { toast } from "@/hooks/use-toast";

export type UserRole = "mentor" | "mentee";

interface CreditsState {
  role: UserRole;
  baseMonthlyCredits: number;
  adjustedMonthlyCredits?: number;
  usedThisMonth: number;
  effectiveCredits: number;
  remaining: number;
  cycleEndDate: Date;
  // Actions
  openCreditsPopover: () => void;
  ensureCreditsOrExplain: (opts?: { showToast?: boolean; message?: string }) => boolean;
  // Demo controls (optional)
  setUsedThisMonth?: React.Dispatch<React.SetStateAction<number>>;
}

const CreditsContext = createContext<CreditsState | null>(null);

function endOfCurrentMonth(): Date {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

function cycleKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

export const CreditsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Defaults for prototype/demo; swap with live data later
  const role: UserRole = (() => {
    try {
      const stored = localStorage.getItem("credits-role");
      return stored === "mentor" || stored === "mentee" ? stored : "mentee";
    } catch {
      return "mentee";
    }
  })();
  const baseMonthlyCredits = role === "mentor" ? 3 : 2;

  const cycleEndDate = useMemo(() => endOfCurrentMonth(), []);
  const usedKey = useMemo(() => `credits-used-${cycleKey(cycleEndDate)}`,[cycleEndDate]);
  const adjustedKey = useMemo(() => `credits-adjusted-${cycleKey(cycleEndDate)}`,[cycleEndDate]);

  const [usedThisMonth, setUsedThisMonth] = useState<number>(() => {
    try {
      const raw = localStorage.getItem(usedKey);
      return raw ? Math.max(0, parseInt(raw, 10)) : 1; // demo seed
    } catch {
      return 1;
    }
  });

  const adjustedMonthlyCredits = useMemo<number | undefined>(() => {
    try {
      const raw = localStorage.getItem(adjustedKey);
      const val = raw ? parseInt(raw, 10) : undefined;
      return Number.isFinite(val as number) ? (val as number) : undefined;
    } catch {
      return undefined;
    }
  }, [adjustedKey]);

  const effectiveCredits = adjustedMonthlyCredits ?? baseMonthlyCredits;
  const remaining = Math.max(0, effectiveCredits - usedThisMonth);

  const openCreditsPopover = useCallback(() => {
    console.debug("[credits] openCreditsPopover dispatch");
    try {
      window.dispatchEvent(new Event("prgrss:show-credits"));
    } catch {}
  }, []);

  const ensureCreditsOrExplain = useCallback((opts?: { showToast?: boolean; message?: string }) => {
    const ok = remaining > 0;
    console.debug("[credits] ensureCreditsOrExplain", { remaining, effectiveCredits, ok });
    if (!ok) {
      if (opts?.showToast !== false) {
        toast({
          title: "You're out of monthly call credits",
          description: opts?.message ?? "See when your credits reset and how many you get each month.",
        });
      }
      openCreditsPopover();
    }
    return ok;
  }, [remaining, effectiveCredits, openCreditsPopover]);

  const value: CreditsState = {
    role,
    baseMonthlyCredits,
    adjustedMonthlyCredits,
    usedThisMonth,
    effectiveCredits,
    remaining,
    cycleEndDate,
    openCreditsPopover,
    ensureCreditsOrExplain,
    setUsedThisMonth,
  };

  return <CreditsContext.Provider value={value}>{children}</CreditsContext.Provider>;
};

export function useCredits() {
  const ctx = useContext(CreditsContext);
  if (!ctx) throw new Error("useCredits must be used within CreditsProvider");
  return ctx;
}
