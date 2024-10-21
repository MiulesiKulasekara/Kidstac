import React from "react";
import heroImg from "../assets/icon/hereoimg.png";

const HeroSection = () => {
  const title = "INTERACTIVE LEARNING WITH KIDSTACK!";
  const text =
    "Unlock a world of fun and learning with Kidstack, where education meets movement! Help your child grow through interactive play, Augmented Reality adventures, and real-world challenges. Engage in activities that sharpen the mind and strengthen the body—start your child’s journey of discovery today!";

  return (
    <section id="kidstc-herosection">
    <div className="flex">
      <div className="my-40 ml-20 text-left">
        <h1 className="mb-8 text-6xl font-bold">{title}</h1>
        <p className="text-lg">{text}</p>

        <div className="mt-5 sm:mt-8 sm:flex">
          <div className="rounded-full shadow">
            <a
              href="#"
              className="w-full px-8 py-2 text-base font-medium bg-white border border-transparent rounded-full md:py-3 md:text-lg md:px-10"
            >
              Play Now
            </a>
          </div>
        </div>
      </div>
      <img src={heroImg} alt="Hero" className="h-auto max-w-xs mr-20" />
    </div>
    </section>
  );
};

export default HeroSection;
