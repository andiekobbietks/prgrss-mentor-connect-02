
import { ReactNode } from 'react';
import { Calendar, MessageSquare, Clock } from 'lucide-react';

export interface GuideStep {
  title: string;
  description: string;
  tourId?: string;
}

export interface GuideRule {
  description: string;
}

export interface LimitationItem {
  label: string;
  value: string;
}

export interface GuideLimitation {
  title: string;
  items: LimitationItem[];
  icon?: ReactNode;
}

export const getMentorData = () => {
  const steps: GuideStep[] = [
    {
      title: "Welcome to the Platform",
      description: "Welcome to PRGRSS! You're now part of a mission to guide and empower the next generation of diverse talent.",
      tourId: "welcome"
    },
    {
      title: "Sync Your Calendar",
      description: "To get started, sync your calendar to allow smooth scheduling of your availability and calls.",
      tourId: "calls"
    },
    {
      title: "Set Your Availability",
      description: "Tell us when you're available during the week. We'll notify you when a young person books a session."
    },
    {
      title: "Join Your Call",
      description: "On the day of your scheduled call, go to your dashboard and select 'Join Call'. Calls can only be joined within the first 5 minutes.",
      tourId: "calls"
    },
    {
      title: "Provide Feedback",
      description: "After the session, submit feedback about your experience. This helps us support you and the mentee better.",
      tourId: "feedback"
    },
    {
      title: "Update Your Availability",
      description: "Regularly update your calendar to stay accessible to mentees."
    }
  ];

  const rules: GuideRule[] = [
    { description: "Two missed (no-show) calls will result in a 1-month restriction from booking further calls." },
    { description: "Calls must be joined within the first 5 minutes." }
  ];

  const limitations: GuideLimitation[] = [
    {
      title: "Call Booking & Management",
      icon: <Calendar className="h-5 w-5 text-accent" />,
      items: [
        { label: "Monthly call limit", value: "3-10 calls" },
        { label: "Maximum reschedules", value: "5 per month" },
        { label: "Maximum cancellations", value: "4 per month" },
        { label: "No-show policy", value: "Blocked for 30 days after 2 no-shows" }
      ]
    },
    {
      title: "Messaging Limitations",
      icon: <MessageSquare className="h-5 w-5 text-accent" />,
      items: [
        { label: "After completed meeting (3 days)", value: "5 messages per day" },
        { label: "Upcoming meeting (next 7 days)", value: "3 messages per day" },
        { label: "No meetings scheduled", value: "1 message per day" },
        { label: "Meeting beyond next 7 days", value: "No messages allowed" }
      ]
    },
    {
      title: "Call Session Rules",
      icon: <Clock className="h-5 w-5 text-accent" />,
      items: [
        { label: "Earliest join time", value: "15 seconds before call" },
        { label: "Latest join time", value: "5 minutes after call starts" }
      ]
    }
  ];

  return { steps, rules, limitations };
};

export const getMenteeData = () => {
  const steps: GuideStep[] = [
    {
      title: "Welcome to the Platform",
      description: "Welcome to PRGRSS! Your journey to personal growth and career development begins now.",
      tourId: "welcome"
    },
    {
      title: "Review Your Mentor Matches",
      description: "Check out your mentor recommendations based on your goals and background.",
      tourId: "profile"
    },
    {
      title: "Book Your Monthly Calls",
      description: "Schedule up to 2 calls per month. Use these wisely and come prepared.",
      tourId: "calls"
    },
    {
      title: "Prepare and Join the Call",
      description: "Be ready for your session. Go to your dashboard to join on time (within the first 5 minutes)."
    },
    {
      title: "Provide Feedback",
      description: "Share feedback after your call. It helps us and your mentor improve your experience.",
      tourId: "feedback"
    },
    {
      title: "Code of Conduct",
      description: "Contacting mentors outside of PRGRSS is not allowed. Respect your mentor's time and commitment.",
      tourId: "messaging"
    }
  ];

  const rules: GuideRule[] = [
    { description: "Two no-shows will pause your access to scheduling for one month." },
    { description: "Join your call within the first 5 minutes." }
  ];

  const limitations: GuideLimitation[] = [
    {
      title: "Call Booking & Management",
      icon: <Calendar className="h-5 w-5 text-accent" />,
      items: [
        { label: "Monthly call limit", value: "2 calls" },
        { label: "Maximum reschedules", value: "2 per month" },
        { label: "Maximum cancellations", value: "2 per month" },
        { label: "No-show policy", value: "Blocked for 60 days after 1 no-show" }
      ]
    },
    {
      title: "Messaging Limitations",
      icon: <MessageSquare className="h-5 w-5 text-accent" />,
      items: [
        { label: "After completed meeting (3 days)", value: "5 messages per day" },
        { label: "Upcoming meeting (next 7 days)", value: "3 messages per day" },
        { label: "If mentor messaged in last 3 days", value: "3 messages per day" },
        { label: "Meeting beyond next 7 days", value: "No messages allowed" }
      ]
    },
    {
      title: "Call Session Rules",
      icon: <Clock className="h-5 w-5 text-accent" />,
      items: [
        { label: "Earliest join time", value: "15 seconds before call" },
        { label: "Latest join time", value: "5 minutes after call starts" }
      ]
    }
  ];

  return { steps, rules, limitations };
};
