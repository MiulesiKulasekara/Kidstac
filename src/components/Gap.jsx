import React from "react";

const Gap = () => {
  const gapData = [
    {
      title: "Physical Skill Development",
      description: "Limited focus on apps that promote motor coordination and physical activities for preschoolers.",
      emoji: "🤸", // Emoji for Physical Skill Development
    },
    {
      title: "Real-Time Feedback",
      description: "Lack of apps providing immediate feedback on physical activities.",
      emoji: "⏱️", // Emoji for Real-Time Feedback
    },
    {
      title: "New Technologies in Preschool Applications",
      description: "Insufficient exploration of Pose detection technology, Augmented Reality, Object Detection, and Voice Recognition in preschool education.",
      emoji: "🧑‍💻", // Emoji for New Technologies
    },
    {
      title: "Tailored Educational Content",
      description: "Need for apps that target specific developmental needs beyond cognitive skills.",
      emoji: "🎯", // Emoji for Tailored Educational Content
    },
  ];

  return (
    <section id="kidstc-gap">
      <div className="min-h-0.5"></div>
      <div style={{ backgroundColor: "#232b2b" }} className="px-20 pt-40 pb-40">
        <div>
          <h1 className="mb-8 text-3xl font-bold text-left" style={{ color: "#F79733" }}>
            Research Gap
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 text-white md:grid-cols-2 lg:grid-cols-4">
          {gapData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 text-center rounded-lg shadow-lg"
              style={{backgroundColor:"#2d3535"}}
            >
              <div className="mb-2 text-4xl">{item.emoji}</div> {/* Emoji at the top */}
              <h2 className="mb-2 text-xl font-semibold" style={{ color: "#F79733" }}>
                {item.title}
              </h2>
              <p className="text-gray-300 text-md">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gap;
