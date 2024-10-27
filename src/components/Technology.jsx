import React, { useState } from "react";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import nianticLogo from "../assets/logo/niantic.png";
import unityLogo from "../assets/logo/unity.png";
import mediaPipeLogo from "../assets/logo/mediapipe.png";
import arCoreLogo from "../assets/logo/arcor.png";
import fireBaseLogo from "../assets/logo/firebase.png";
// import unityLogo from "../assets/logo/niantic.png"
// import nianticLogo from "../assets/logo/niantic.png";
// import unityLogo from "../assets/logo/niantic.png"
// import nianticLogo from "../assets/logo/niantic.png";
// import unityLogo from "../assets/logo/niantic.png"

const dataRow1 = [
  {
    id: 1,
    name: "Unity",
    icon: unityLogo,
  },
  {
    id: 2,
    name: "Niantic",
    icon: nianticLogo,
  },
  {
    id: 3,
    name: "MediaPipe",
    icon: mediaPipeLogo,
  },
  {
    id: 4,
    name: "ARCore",
    icon: arCoreLogo,
  },
  {
    id: 5,
    name: "Firebase",
    icon: fireBaseLogo,
  },
];

const dataRow2 = [
  {
    id: 6,
    name: "Google Colab",
    icon: "",
  },
  {
    id: 7,
    name: "AWS",
    icon: "",
  },
  {
    id: 8,
    name: "Springboot",
    icon: "",
  },
  {
    id: 9,
    name: "C#",
    icon: "",
  },
  {
    id: 10,
    name: "Python",
    icon: "",
  },
];

const Technology = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-20">Technologies Used</h2>
      <div className="flex flex-col gap-10 items-center mb-32">
        <div className="flex md:flex-row flex-col gap-32">
          {dataRow1.map((item, index) => {
            return (
              <div
                className="-mr-4  relative group"
                key={item.name}
                onMouseEnter={() => setHoveredIndex(item.id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence mode="popLayout">
                  {hoveredIndex === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.6 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 10,
                        },
                      }}
                      exit={{ opacity: 0, y: 20, scale: 0.6 }}
                      style={{
                        translateX: translateX,
                        rotate: rotate,
                        whiteSpace: "nowrap",
                      }}
                      className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                    >
                      <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                      <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                      <div className="font-bold text-white relative z-30 text-base">
                        {item.name}
                      </div>
                      <div className="text-white text-xs">ght</div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div
                  className="w-40 h-40 rounded-full dark:bg-orange-50 flex justify-center items-center shadow-2xl"
                  onMouseMove={handleMouseMove}
                >
                  <div className="relative w-24 h-24">
                    <img
                      src={item.icon}
                      alt="Niantic Logo"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex md:flex-row flex-col gap-32">
          {dataRow2.map((item) => {
            return (
              <div className="w-40 h-40 rounded-full dark:bg-orange-50 flex justify-center items-center">
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technology;
