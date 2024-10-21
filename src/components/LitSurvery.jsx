import React from "react";
import { useState } from "react";

const cardDetails = {
  "Evaluation of Google Play Educational Apps 🌏": [
    "Evaluated 50 popular preschool educational apps.",
    "90% performed well in technical features.",
    "Only 18% scored high in educational content.",
    "36% had well-designed interfaces.",
  ],
  "Using Technology in Early Childhood Education 💻": [
    "Reviewed studies on technology use in Asia.",
    "Improves skills in language and problem-solving.",
    "Challenges include limited resources.",
  ],
  "Technology Education in Early Childhood 📚": [
    "Examined 25 studies on technology's role.",
    "Innovative uses like robotics and digital tools.",
    "Challenges in adaptation and support.",
  ],
  "Mobile Learning for Preschoolers 🎮": [
    "Reviewed the growth of mobile learning apps.",
    "Games are the most popular app type.",
    "Tablets preferred for usability.",
  ],
  "Gamification in E-learning 🎮": [
    "Examined gamification's impact on learning.",
    "Engagement increases with gamification elements.",
    "Identified challenges in implementation.",
  ],
};

export const LitSurvery = () => {
  const [modalContent, setModalContent] = useState({ title: "", details: [] });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDetails = (title) => {
    setModalContent({ title, details: cardDetails[title] });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="kidstc-litreview">
      <h1 className="ml-20 text-3xl font-bold text-gray-800">Literature Survay.</h1>
      <div className="flex flex-wrap items-center justify-center gap-6 p-5">
        {Object.keys(cardDetails).map((title) => (
          <div
            key={title}
            className="w-64 p-6 transition-transform duration-300 bg-white border border-gray-300 shadow-lg cursor-pointer rounded-xl hover:scale-105"
            onClick={() => toggleDetails(title)}
          >
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        ))}

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative w-full max-w-sm p-8 bg-white rounded-lg">
              <button
                className="absolute px-3 py-1 text-white bg-red-600 rounded-lg top-2 right-2"
                onClick={closeModal}
              >
                X
              </button>
              <h3 className="mb-4 text-xl font-bold">{modalContent.title}</h3>
              <ul className="ml-5 space-y-2 list-disc">
                {modalContent.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LitSurvery;
