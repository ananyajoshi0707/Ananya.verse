"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [secondsSpent, setSecondsSpent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <footer className="bg-white dark:bg-[#111827] text-gray-700 dark:text-gray-300 py-10 border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col gap-6 md:flex-row md:justify-between md:items-center text-center md:text-left">

        {/* Branding and Time Info */}
        <div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            ⏱ Time Spent: {formatTime(secondsSpent)} 
           </p>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            &copy; {new Date().getFullYear()} All rights reserved. Made by <span className="text-pink-500 font-medium">Ananya Joshi✨</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
