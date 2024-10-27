import React from "react";
import Lottie from "react-lottie";
import animationData from "../lottie/heroAnimation.json";

const HeroSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const title = "INTERACTIVE LEARNING WITH KIDSTACK!";
  const text =
    "Unlock a world of fun and learning with Kidstack, where education meets movement! Help your child grow through interactive play. Start your child’s journey of discovery today!";

  return (
    <section id="kidstack-herosection">
      <div className="flex flex-col md:flex-row h-dvh">
        <div className="flex-1 pr-20 my-40 ml-20 space-y-8 text-left">
          <h1 className="mb-8 text-6xl font-bold text-white">{title}</h1>
          <p className="text-lg text-white">{text}</p>
          <div className="">
            <a
              href="#"
              style={{ backgroundColor: "#232b2b" }}
              className="w-full px-8 py-2 font-medium text-white border border-transparent rounded-full mtext-base md:py-2 md:text-lg md:px-10"
            >
              Play Now
            </a>
          </div>
        </div>
        <div className="flex-1"></div>
        <div>
          <div className="absolute top-0 right-0">
            <Lottie
              options={defaultOptions}
              height={700}
              width={700}
              speed={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
