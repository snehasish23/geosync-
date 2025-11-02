"use client";

import { motion } from "framer-motion";

type VisualVariant = "hero" | "spheres" | "badge" | "coming" | "atom" | "swirl" | "ring";

interface VisualElementsProps {
  variant?: VisualVariant;
}

export default function VisualElements({ variant = "hero" }: VisualElementsProps) {
  switch (variant) {
    case "hero":
      return <HeroVisual />;
    case "spheres":
      return <SpheresVisual />;
    case "badge":
      return <BadgeVisual />;
    case "coming":
      return <ComingVisual />;
    case "atom":
      return <AtomVisual />;
    case "swirl":
      return <SwirlVisual />;
    case "ring":
      return <RingVisual />;
    default:
      return <HeroVisual />;
  }
}

function HeroVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-turquoise-500/20 to-blue-500/20" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-teal-500/40 to-teal-500/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/40 to-blue-500/10 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-turquoise-500/40 to-turquoise-500/10 blur-xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border-2 border-teal-500/30 rounded-lg rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-12 h-12 border-2 border-blue-500/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

function SpheresVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/15 via-turquoise-500/15 to-blue-500/15" />
      
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${40 + i * 15}px`,
            height: `${40 + i * 15}px`,
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? "rgba(0,194,178,0.4)" : i % 3 === 1 ? "rgba(31,214,212,0.4)" : "rgba(27,143,255,0.4)"
            }, transparent)`,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}

function BadgeVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-turquoise-500/20 to-blue-500/20" />
      
      {/* Concentric circles */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full"
          style={{
            width: `${60 + i * 40}%`,
            height: `${60 + i * 40}%`,
            borderColor: i === 1 ? "rgba(0,194,178,0.3)" : i === 2 ? "rgba(31,214,212,0.3)" : "rgba(27,143,255,0.3)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Center dot */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 via-turquoise-500 to-blue-500"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

function ComingVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-turquoise-500/10 to-blue-500/10" />
      
      {/* Pulsing waves */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed"
          style={{
            width: `${40 + i * 30}%`,
            height: `${40 + i * 30}%`,
            borderColor: "rgba(255,255,255,0.2)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

function AtomVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/15 via-turquoise-500/15 to-blue-500/15" />
      
      {/* Orbital rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-full"
          style={{
            width: `${50 + i * 25}%`,
            height: `${50 + i * 25}%`,
            borderColor: i === 0 ? "rgba(0,194,178,0.3)" : i === 1 ? "rgba(31,214,212,0.3)" : "rgba(27,143,255,0.3)",
            transform: `translate(-50%, -50%) rotateX(${i * 60}deg)`,
          }}
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Electrons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-teal-500 to-blue-500"
          animate={{
            rotate: `${i * 60}deg`,
            x: 80,
          }}
          style={{
            transformOrigin: "0 0",
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function SwirlVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/15 via-turquoise-500/15 to-blue-500/15" />
      
      {/* Swirling lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[1, 2, 3].map((i) => (
          <motion.path
            key={i}
            d={`M ${50 - i * 10} ${50} Q ${50 + i * 15} ${50 - i * 10}, ${50} ${50 + i * 10} T ${50 - i * 10} ${50}`}
            fill="none"
            stroke={i === 1 ? "#00c2b2" : i === 2 ? "#1fd6d4" : "#1b8fff"}
            strokeWidth="2"
            strokeOpacity="0.4"
            strokeDasharray="5,5"
            animate={{
              rotate: [0, 360],
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "50% 50%",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function RingVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/15 via-turquoise-500/15 to-blue-500/15" />
      
      {/* Rotating rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 rounded-full border-teal-500/40"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border-2 rounded-full border-turquoise-500/40"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 border-2 rounded-full border-blue-500/40"
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}


