"use client";

import { useEffect, useRef } from "react";

export default function ScrollGradientBall() {
  const ball1Ref = useRef(null);
  const ball2Ref = useRef(null);

  useEffect(() => {
    const ball1 = ball1Ref.current;
    const ball2 = ball2Ref.current;
    if (!ball1 || !ball2) return;

    let cur1X = window.innerWidth / 2;
    let cur1Y = 300;
    let tar1X = cur1X;
    let tar1Y = cur1Y;

    let cur2X = window.innerWidth * 0.7;
    let cur2Y = 500;
    let tar2X = cur2X;
    let tar2Y = cur2Y;

    let rafId;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      // Ball 1 — S-curve across page
      tar1Y = scrollY + window.innerHeight * 0.4;
      tar1X =
        window.innerWidth * 0.15 +
        Math.sin(progress * Math.PI * 3) * (window.innerWidth * 0.6);

      // Ball 2 — offset cosine trail
      tar2Y = scrollY + window.innerHeight * 0.55;
      tar2X =
        window.innerWidth * 0.75 +
        Math.cos(progress * Math.PI * 2.5) * (window.innerWidth * 0.2);
    };

    const animate = () => {
      cur1X += (tar1X - cur1X) * 0.05;
      cur1Y += (tar1Y - cur1Y) * 0.05;
      cur2X += (tar2X - cur2X) * 0.03;
      cur2Y += (tar2Y - cur2Y) * 0.03;

      ball1.style.left = cur1X - 300 + "px";
      ball1.style.top = cur1Y - 300 + "px";
      ball2.style.left = cur2X - 220 + "px";
      ball2.style.top = cur2Y - 220 + "px";

      rafId = requestAnimationFrame(animate);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{`
        

        .sgb-ball-2 {
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          background: radial-gradient(
            circle at 55% 55%,
            rgba(251, 146, 60, 0.22) 0%,
            rgba(236, 72, 153, 0.15) 50%,
            transparent 100%
          );
          filter: blur(70px);
          pointer-events: none;
          z-index: 0;
          will-change: left, top;
        }

        .sgb-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <div className="sgb-wrapper">
        <div ref={ball1Ref} className="sgb-ball-1" />
        <div ref={ball2Ref} className="sgb-ball-2" />
      </div>
    </>
  );
}