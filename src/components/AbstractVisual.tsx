"use client";

import { motion } from "framer-motion";

export default function AbstractVisual() {
  return (
    <div className="relative h-full w-full bg-[#0a0e14] rounded-2xl overflow-hidden">
      {/* Background wavy lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c2b2" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#1fd6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1b8fff" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Wavy lines */}
        <motion.path
          d="M 0 100 Q 100 80, 200 100 T 400 100"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 0 150 Q 100 130, 200 150 T 400 150"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.3 }}
        />
        <motion.path
          d="M 0 200 Q 100 180, 200 200 T 400 200"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.6 }}
        />
        <motion.path
          d="M 0 250 Q 100 230, 200 250 T 400 250"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 0.9 }}
        />
      </svg>

      {/* Glowing circles */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-[#00c2b2] rounded-full blur-2xl opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 bg-[#00c2b2] rounded-full blur-2xl opacity-40"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-2 border-[#00c2b2] rounded-full opacity-50"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Square outline */}
      <motion.div
        className="absolute bottom-8 right-8 w-20 h-20 border border-[#1fd6d4] opacity-30"
        animate={{
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}


