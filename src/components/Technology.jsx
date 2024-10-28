import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import nianticLogo from "../assets/logo/niantic.png";
import unityLogo from "../assets/logo/unity.png";
import mediaPipeLogo from "../assets/logo/mediapipe.png";
import arCoreLogo from "../assets/logo/arcor.png";
import fireBaseLogo from "../assets/logo/firebase.png";
import colab from "../assets/logo/colab.png";
import aws from "../assets/logo/aws.png";
import csharp from "../assets/logo/csharp.png"
import spring from "../assets/logo/spring.png";
import python from "../assets/logo/python.png"

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
    icon: colab,
  },
  {
    id: 7,
    name: "AWS",
    icon: aws,
  },
  {
    id: 8,
    name: "Springboot",
    icon: spring,
  },
  {
    id: 9,
    name: "C#",
    icon: csharp,
  },
  {
    id: 10,
    name: "Python",
    icon: python,
  },
];

const Technology = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };
  return (
    <section id="kidstc-technology">
      <div className="min-h-0.5"></div>
      <div style={{ backgroundColor: "#232b2b" }} className="px-20 pt-40 pb-20">
        <div>
          <h1 className="mb-20 text-3xl font-bold" style={{ color: "#F79733" }}>
            Technology
          </h1>
        </div>
        <div className="flex flex-col items-center gap-10 mb-32">
          <div className="flex flex-col gap-32 md:flex-row">
            {dataRow1.map((item, index) => {
              return (
                <div
                  className="relative -mr-4 group"
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
                        className="absolute z-50 flex flex-col items-center justify-center px-4 py-2 text-xs translate-x-1/2 bg-black rounded-md shadow-xl -top-16 -left-1/2"
                      >
                        <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                        <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                        <div className="relative z-30 text-base font-bold text-white">
                          {item.name}
                        </div>
                        {/* <div className="text-xs text-white">ght</div> */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div
                    className="flex items-center justify-center w-40 h-40 bg-white rounded-full shadow-2xl"
                    onMouseMove={handleMouseMove}
                  >
                    <div className="relative w-24 h-24">
                      <img
                        src={item.icon}
                        alt="Niantic Logo"
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="flex flex-col gap-32 md:flex-row">
            {dataRow2.map((item) => {
              return (
                <div className="flex items-center justify-center w-40 h-40 rounded-full dark:bg-orange-50">
                  {item.name}
                </div>
              );
            })}
          </div> */}

          <div className="flex flex-col gap-32 md:flex-row">
            {dataRow2.map((item, index) => {
              return (
                <div
                  className="relative -mr-4 group"
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
                        className="absolute z-50 flex flex-col items-center justify-center px-4 py-2 text-xs translate-x-1/2 bg-black rounded-md shadow-xl -top-16 -left-1/2"
                      >
                        <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                        <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                        <div className="relative z-30 text-base font-bold text-white">
                          {item.name}
                        </div>
                        {/* <div className="text-xs text-white">ght</div> */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div
                    className="flex items-center justify-center w-40 h-40 bg-white rounded-full shadow-2xl"
                    onMouseMove={handleMouseMove}
                  >
                    <div className="relative w-24 h-24">
                      <img
                        src={item.icon}
                        alt="Niantic Logo"
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
