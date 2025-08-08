
import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Coins } from "lucide-react";
import { cn } from "@/lib/utils";

export type UserRole = "mentor" | "mentee";

interface CreditCoinProps {
  role: UserRole;
  baseMonthlyCredits: number; // e.g., mentee: 2, mentor: 3
  adjustedMonthlyCredits?: number; // optional admin override for this cycle
  usedThisMonth: number; // how many credits have been consumed
  cycleEndDate: Date; // when the credits reset
  className?: string;
}

function formatDate(d: Date) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(d);
  } catch {
    return d.toDateString();
  }
}

export const CreditCoin: React.FC<CreditCoinProps> = ({
  role,
  baseMonthlyCredits,
  adjustedMonthlyCredits,
  usedThisMonth,
  cycleEndDate,
  className,
}) => {
  const effectiveCredits = adjustedMonthlyCredits ?? baseMonthlyCredits;
  const remaining = Math.max(0, effectiveCredits - usedThisMonth);
  const adjusted = adjustedMonthlyCredits !== undefined && adjustedMonthlyCredits !== baseMonthlyCredits;

  // Cycle-aware acknowledgment key so we only pulse once per cycle
  const cycleKey = React.useMemo(() => {
    const y = cycleEndDate.getFullYear();
    const m = cycleEndDate.getMonth() + 1;
    return `credit-coin-ack-${y}-${m}`;
  }, [cycleEndDate]);

  const [open, setOpen] = useState(false);
  const [silenced, setSilenced] = useState(false);
  const [ack, setAck] = useState<boolean>(() => {
    try {
      return localStorage.getItem(cycleKey) === "1";
    } catch {
      return false;
    }
  });

  // Allow other parts of the app (e.g., booking) to programmatically open this
  useEffect(() => {
    const listener = () => {
      setOpen(true);
      setSilenced(true);
      try {
        localStorage.setItem(cycleKey, "1");
        setAck(true);
      } catch {}
    };
    window.addEventListener("prgrss:show-credits", listener);
    return () => window.removeEventListener("prgrss:show-credits", listener);
  }, [cycleKey]);

  // Slower pulse; stop after first interaction, but repulse when out of credits
  const shouldPulse = !silenced && (!ack || remaining === 0);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (next) {
      setSilenced(true);
      try {
        localStorage.setItem(cycleKey, "1");
        setAck(true);
      } catch {}
    }
  };
  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <button
          aria-label="Show monthly call credits"
          className={cn(
            "relative inline-flex items-center justify-center rounded-full shadow-sm",
            "h-12 w-12 md:h-14 md:w-14",
            // Coin look with brand tokens
            "bg-gradient-to-br from-primary/90 to-primary/60 text-primary-foreground",
            // Glow + subtle pulse to hint it's interactive
            "ring-2 ring-primary/40 hover:ring-primary/60 transition-all duration-300 motion-reduce:animate-none",
            "hover:scale-105 active:scale-95",
            shouldPulse ? "motion-safe:animate-[pulse_3.5s_cubic-bezier(0.4,0,0.6,1)_infinite]" : "animate-none",
            className
          )}
        >
          <span className="sr-only">Open credit details</span>
          <div className="absolute inset-0 rounded-full bg-white/5" />
          <Coins className="relative z-10 h-5 w-5" />
          {/* Small badge with remaining */}
          <span
            className={cn(
              "absolute -bottom-1 -right-1 z-10",
              "px-1.5 py-0.5 text-[10px] rounded-full",
              "bg-background text-foreground border border-border"
            )}
          >
            {remaining}/{effectiveCredits}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-base font-semibold">Monthly Call Credits</h3>
              <p className="text-sm text-muted-foreground">For your {role} account</p>
            </div>
          </div>

          <div className="rounded-md border p-3 bg-card">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Remaining</span>
              <span className="text-lg font-semibold">{remaining} of {effectiveCredits}</span>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Resets on <span className="font-medium">{formatDate(cycleEndDate)}</span>
            </div>
            {adjusted && (
              <div className="mt-2 text-xs">
                <span className="inline-flex items-center rounded-full bg-accent/20 px-2 py-0.5 text-accent">Admin adjustment applied</span>
              </div>
            )}
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <p>• Default monthly credits: mentees {baseMonthlyCredits}</p>
            <p>• Unused credits do not roll over</p>
            <p>• Admin may temporarily adjust your monthly limit</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
