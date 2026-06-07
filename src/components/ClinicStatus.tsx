"use client";

import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";

export function ClinicStatus() {
  const [status, setStatus] = useState<{ isOpen: boolean; message: string }>({
    isOpen: false,
    message: "Checking operational hours...",
  });

  useEffect(() => {
    const checkStatus = () => {
      // Calculate IST time (UTC + 5:30)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);

      const day = istTime.getDay(); // 0 = Sunday, 1-6 = Monday-Saturday
      const hour = istTime.getHours();
      const minute = istTime.getMinutes();
      const timeDecimal = hour + minute / 60;

      let isOpen = false;
      let message = "";

      if (day === 0) {
        // Sunday: 10:00 AM - 2:00 PM
        if (timeDecimal >= 10 && timeDecimal < 14) {
          isOpen = true;
          message = "Open Now (Closes at 2:00 PM)";
        } else {
          message = "Closed Now (Sunday Hours: 10:00 AM - 2:00 PM)";
        }
      } else {
        // Monday - Saturday: 9:00 AM - 7:00 PM
        if (timeDecimal >= 9 && timeDecimal < 19) {
          isOpen = true;
          message = "Open Now (Closes at 7:00 PM)";
        } else {
          const nextDayTime = day === 6 ? "10:00 AM Sunday" : "9:00 AM Tomorrow";
          message = `Closed Now (Opens at ${nextDayTime})`;
        }
      }

      setStatus({ isOpen, message });
    };

    checkStatus();
    // Update every minute
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-brand-50/50 dark:bg-white/[0.03] px-3.5 py-1.5 border border-brand-100/50 dark:border-white/5 shadow-soft">
      <span className="relative flex h-2.5 w-2.5">
        {status.isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${status.isOpen ? "bg-emerald-500" : "bg-rose-500"}`}></span>
      </span>
      <span className="text-[11px] font-black uppercase tracking-widest text-brand-900 dark:text-brand-100 flex items-center gap-1.5">
        <FiClock className="text-brand-650" /> {status.message}
      </span>
    </div>
  );
}
