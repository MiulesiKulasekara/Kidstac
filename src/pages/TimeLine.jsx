"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ProgressCircle from "../components/ProgressCircle";
import { data } from "../data/milestoneData";

const Timeline = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="kidstc-milestones">
      <div className="min-h-0.5"></div>
      <div
        className="w-full px-20 pt-20 pb-20 font-sans"
        ref={containerRef}
        style={{ backgroundColor: "#232b2b" }}
      >
        <div>
          <h1
            className="mb-8 text-3xl font-bold text-left"
            style={{ color: "#F79733" }}
          >
            Milestones
          </h1>
        </div>
        <div ref={ref} className="relative max-w-7xl">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start md:pt-10 md:gap-40"
            >
              <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                <div className="absolute flex items-center justify-center w-10 h-10 bg-orange-400 rounded-full left-3 md:left-3">
                  <div className="w-4 h-4 p-2 border rounded-full bg-neutral-200 border-neutral-300" />
                </div>
                <div className="flex flex-col">
                  <h3 className="hidden text-xl font-bold md:block md:pl-20 md:text-4xl text-neutral-500">
                    {item.year}
                  </h3>
                  <h3 className="hidden font-bold text-m md:block md:pl-20 md:text-4xl text-neutral-500">
                    {item.month}
                  </h3>
                </div>
              </div>

              <div className="relative w-full pl-20 pr-4 md:pl-4">
                <h3 className="block mb-4 text-2xl font-bold text-left md:hidden text-neutral-500">
                  {item.year}
                </h3>
                <h3 className="block mb-4 text-2xl font-bold text-left md:hidden text-neutral-500">
                  {item.month}
                </h3>
                <div>
                  <p className="mb-8 text-xs font-bold text-orange-400 md:text-3xl">
                    {item.title}
                  </p>
                  <div className="flex flex-row gap-5">
                    <div className="p-6 text-2xl bg-white bg-opacity-25 rounded-lg shadow-lg backdrop-blur-xl w-80">
                      <ProgressCircle progress={item.marks} />
                      <p className="mt-5 text-lg font-bold text-center text-white">
                        Marks Allocated
                      </p>
                    </div>
                    <div className="w-full p-6 bg-white bg-opacity-25 rounded-lg shadow-lg backdrop-blur-xl">
                      <p
                        className="text-xl font-semibold"
                        style={{ color: "#F79733" }}
                      >
                        PURPOSE:
                      </p>
                      <p className="text-xl font-semibold text-white">
                        {item.purpose}
                      </p>
                      <p className="mt-10 text-xl font-normal text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-1/3 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-orange-500 via-white to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
