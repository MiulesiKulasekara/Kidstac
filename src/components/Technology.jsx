import React from "react";

const dataRow1 = [
  {
    name: "Unity",
    icon: "",
  },
  {
    name: "Niantic",
    icon: "",
  },
  {
    name: "MediaPipe",
    icon: "",
  },
  {
    name: "ARCore",
    icon: "",
  },
  {
    name: "Firebase",
    icon: "",
  },
];

const dataRow2 = [
  {
    name: "Google Colab",
    icon: "",
  },
  {
    name: "AWS",
    icon: "",
  },
  {
    name: "Springboot",
    icon: "",
  },
  {
    name: "C#",
    icon: "",
  },
  {
    name: "Python",
    icon: "",
  },
];

const Technology = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-20">Technologies Used</h2>
      <div className="flex flex-col gap-10 items-center mb-32">
        <div className="flex flex-row gap-32">
          {dataRow1.map((item) => {
            return (
              <div className="w-40 h-40 rounded-full dark:bg-orange-50 flex justify-center items-center">
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row gap-32">
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