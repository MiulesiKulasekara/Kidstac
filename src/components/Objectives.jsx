import React from "react";
import Img from "../assets/icon/goals.png";

const objectives = [
  {
    title:
      "Integrate Pose Detection Technology for Preschool Learning Applications",
    description:
      "Implement pose detection technology to allow children to mimic physical movements demonstrated in the app. This feature will provide real-time feedback on their movements, helping to improve their physical coordination and motor skills while making learning enjoyable and interactive.",
  },
  {
    title:
      "Integrate Augmented Reality Technology for Preschool Learning Applications",
    description:
      "Utilize augmented reality (AR) to create immersive learning experiences that bring educational content to life. By overlaying digital information onto the real world, children can explore and interact with learning materials in a playful manner, enhancing their understanding of concepts and encouraging curiosity about their surroundings.",
  },
  {
    title:
      "Integrate Object Detection Technology for Preschool Learning Applications",
    description:
      "Incorporate object detection technology to enable the app to recognize and respond to physical objects in the child’s environment. This feature will allow for hands-on learning, where children can interact with real-world objects, helping them to connect abstract concepts with tangible experiences and enhancing their observational skills.",
  },
  {
    title:
      "Integrate Voice Recognition Technology for Preschool Learning Applications",
    description:
      "Implement voice recognition technology to allow children to engage with the app through spoken commands and responses. This will promote language development and communication skills, encouraging children to express themselves verbally while interacting with educational content. The app can provide personalized feedback and adapt to each child's learning pace, making it a supportive learning tool.",
  },
];

const Objectives = () => {
  return (
    <section id="kidstc-objectives">
      <div className="px-20 pt-20 pb-20">
        <div>
          <h1 className="mb-8 text-3xl font-bold" style={{ color: "#232b2b" }}>
            Objectives
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="p-6 transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                  {objective.title}
                </h3>
                <p className="text-lg text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
