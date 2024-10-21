import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProgressCircle = ({ progress = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const circumference = 2 * Math.PI * 80; // 80 is the radius of the circle
  const progressVariants = {
    hidden: { strokeDashoffset: circumference },
    visible: {
      strokeDashoffset: circumference - (progress / 100) * circumference,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-auto h-auto relative" ref={ref}>
      <svg width="100%" height="100%" viewBox="0 0 200 200">
        {/* Background circle */}
        <circle cx="100" cy="100" r="80" fill="none" stroke="#e6e6e6" strokeWidth="20" />
        {/* Progress circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#F79733"
          strokeWidth="20"
          strokeLinecap="round"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={progressVariants}
          style={{
            strokeDasharray: circumference,
            rotate: "-90deg",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold" style={{color:"#F79733"}}>{`${Math.round(progress)}%`}</span>
      </div>
    </div>
  );
};

export default ProgressCircle;
