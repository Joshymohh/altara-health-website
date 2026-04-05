"use client";

import { useEffect, useRef, useState } from "react";

const MIN_DISPLAY_MS = 1500;

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);
  const mountTimeRef = useRef<number>(0);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    mountTimeRef.current = Date.now();

    const scheduleHide = () => {
      const elapsed = Date.now() - mountTimeRef.current;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      hideTimeoutRef.current = setTimeout(() => setVisible(false), remaining);
    };

    if (typeof document !== "undefined" && document.readyState === "complete") {
      scheduleHide();
      return () => {
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      };
    }

    window.addEventListener("load", scheduleHide);
    const fallback = setTimeout(scheduleHide, 8000);

    return () => {
      window.removeEventListener("load", scheduleHide);
      clearTimeout(fallback);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => setHide(true), 400);
      return () => clearTimeout(t);
    }
  }, [visible]);

  if (hide) return null;

  return (
    <div
      className={`loading-screen fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 px-4 transition-opacity duration-300 ease-out ${!visible ? "loading-screen--out opacity-0 pointer-events-none" : ""}`}
      aria-hidden="true"
    >
      {/* Logo with moving glossy gradient (#326ea2 → #003366) */}
      <div className="loading-screen-logo flex-shrink-0">
        <svg
          viewBox="0 0 1500 1500"
          className="h-[4.68rem] w-[4.68rem] sm:h-[6.24rem] sm:w-[6.24rem] md:h-[7.02rem] md:w-[7.02rem]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="loading-logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#003366" />
              <stop offset="50%" stopColor="#326ea2" />
              <stop offset="100%" stopColor="#003366" />
              <animate attributeName="x1" values="0%;150%;0%" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="x2" values="100%;250%;100%" dur="2.5s" repeatCount="indefinite" />
            </linearGradient>
          </defs>
          <path
            transform="translate(642,123)"
            d="m0 0h189l5 12 17 49 16 45 19 54 17 48 19 54 16 45 19 54 34 96 19 54 17 48 19 54 17 48 19 54 15 42 20 57 18 50 11 27 13 29 10 20 13 23 10 15 12 16 9 10 12 12 10 7 16 9 16 6 14 3 21 2v65l-15 5-21 5-25 4-29 2h-22l-23-2-20-4-18-6-18-8-17-9-12-8-12-9-13-11-16-15-9-10-13-16-14-21-12-21-12-26-11-31-10-29-22-64-15-43-17-49-10-28v-2h-408l-2 9-15 44-15 43-16 47-15 43-12 36-5 23-1 6v24l4 16 5 10 8 10 10 7 13 6 15 4 13 2 72 1v64l-1 1h-388v-65l21-2 14-3 16-6 14-7 13-10 12-11 9-11 11-15 12-19 10-18 13-25 15-33 11-30 21-58 21-57 23-64 21-57 23-64 21-57 23-64 21-57 23-64 21-57 23-64 21-57 23-64 18-49 7-19zm52 123-21 62-14 41-19 56-117 344v1h351l-10-30-16-45-19-54-15-42-19-54-19-53-21-60-51-144-8-22z"
            fill="url(#loading-logo-gradient)"
          />
        </svg>
      </div>

      <div className="flex flex-col items-center gap-4 text-center">
        <span
          className="loading-screen-title text-4xl font-normal italic text-[#1a3a4a] sm:text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Altara
        </span>
        <span
          className="loading-screen-tagline text-[1.2rem] font-light italic text-[#1a3a4a]/80 sm:text-[1.35rem]"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          For those who live well.
        </span>
      </div>

      {/* Pulsing dots - blue gradient colors, breathing rhythm */}
      <div className="loading-screen-dots flex items-center justify-center gap-1.5">
        <span className="loading-screen-dot h-1.5 w-1.5 rounded-full" />
        <span className="loading-screen-dot loading-screen-dot-2 h-1.5 w-1.5 rounded-full" />
        <span className="loading-screen-dot loading-screen-dot-3 h-1.5 w-1.5 rounded-full" />
      </div>
    </div>
  );
}
