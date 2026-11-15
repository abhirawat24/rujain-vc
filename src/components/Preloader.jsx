
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 1800);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex h-screen w-full items-center justify-center overflow-hidden bg-black transition-opacity duration-600 ease-in-out ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img
        src="/logo.png"
        alt="Rujain Travels Nainital"
        className={`preloader-logo ${
          exiting ? "preloader-exit" : ""
        }`}
      />

      <style>{`
        .preloader-logo {
          width: clamp(190px, 35vw, 340px);
          height: auto;
          object-fit: contain;
          animation: smoothLogoSpin 1.8s cubic-bezier(0.45, 0, 0.55, 1) forwards;
          will-change: transform, opacity;
        }

        @keyframes smoothLogoSpin {
          0% {
            opacity: 0;
            transform: scale(0.55) rotate(-90deg);
          }

          15% {
            opacity: 1;
          }

          100% {
            opacity: 1;
            transform: scale(1.15) rotate(360deg);
          }
        }

        .preloader-exit {
          animation: logoExit 0.6s ease-in forwards;
        }

        @keyframes logoExit {
          from {
            opacity: 1;
            transform: scale(1.15) rotate(360deg);
          }

          to {
            opacity: 0;
            transform: scale(1.8) rotate(390deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .preloader-logo,
          .preloader-exit {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
