import React, { useState } from "react";

const LitSurvery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const DownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const UpIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const accordionData = [
    {
      title: "Educational Apps for Preschoolers 📖✏️",
      content: (
        <>
          Research such as{" "}
          <a
            href="https://www.syncsci.com/journal/AMLER/article/view/AMLER.2023.02.004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Evaluation of Google Play Educational Apps for Early Childhood
            Education
          </a>{" "}
          examined the effectiveness of popular educational apps for
          preschoolers. This study found that while many apps are technically
          well-designed, most lack strong educational content and personalized
          interaction. Our project aims to address this gap by using advanced
          pose detection technology to offer real-time feedback during physical
          activities, providing a more interactive and engaging learning
          experience for young children.
        </>
      ),
    },
    {
      title: "Using Technology in Early Childhood Education 💻📚",
      content: (
        <>
          <a
            href="https://www.researchgate.net/publication/367454873_Using_Technology_for_Learning_in_Early_Childhood_Education_A_Review_of_Asian_Countries"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            A review of how technology is used in early childhood education
            across Asian countries
          </a>{" "}
          highlights the benefits of using digital tools to improve skills such
          as problem-solving, language, and confidence. However, it also reveals
          challenges like teachers' lack of technological knowledge. While this
          study discusses the general use of technology, our project
          specifically focuses on using pose detection technology to help
          preschoolers learn through imitation and real-time feedback, something
          not covered in previous research.
        </>
      ),
    },
    {
      title: "Technology Education in Early Childhood 🌐💻",
      content: (
        <>
          The paper{" "}
          <a
            href="https://www.tandfonline.com/doi/full/10.1080/10494820.2022.2160470"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Technology Education in Early Childhood Education: A Systematic
            Review
          </a>{" "}
          discusses how technology has been applied to early education in fields
          like robotics and programming. However, it does not focus on tools
          that promote physical development. Our project fills this gap by
          integrating physical skill development through interactive games that
          use pose detection.
        </>
      ),
    },
    {
      title: "Mobile Learning for Preschoolers 📱📙",
      content: (
        <>
          The systematic review{" "}
          <a
            href="https://www.researchgate.net/publication/367277414_Mobile_learning_for_preschoolers_a_systematic_literature_review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Mobile Learning for Preschoolers
          </a>{" "}
          shows that mobile learning is a growing field, with most applications
          focusing on games, literacy, and math. Our research takes a more
          specialized approach by incorporating physical activities into mobile
          learning, using pose detection to guide children in mimicking
          movements, promoting both cognitive and physical development.
        </>
      ),
    },
    {
      title: "Gamification in E-learning ⭐👍",
      content: (
        <>
          The review{" "}
          <a
            href="https://link.springer.com/article/10.1007/s10758-020-09487-x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Gamification Applications in E-learning
          </a>{" "}
          highlights the use of game elements like points and rewards to
          motivate students. While gamification is widely used, our project
          takes a different approach by focusing on interactive feedback to help
          children improve their physical coordination. This personalized and
          immediate feedback makes learning more engaging and suitable for
          preschoolers' developmental needs.
        </>
      ),
    },
  ];

  return (
    <section id="kidstc-litreview">
      <div style={{ backgroundColor: "#f5f5f5" }} className="px-20 pt-10">
        <div>
          <h1
            className="mb-4 text-3xl font-bold text-gray-800"
            style={{ color: "#F79733" }}
          >
            Literature Survey
          </h1>
        </div>
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-slate-200">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full py-5 text-slate-800"
            >
              <h3
                className="text-2xl font-semibold text-gray-800"
              >
                {item.title}
              </h3>
              <span className="transition-transform duration-300 text-slate-800">
                {activeIndex === index ? <DownIcon /> : <UpIcon />}
              </span>
            </button>
            <div
              style={{
                maxHeight: activeIndex === index ? "200px" : "0", 
              }}
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="pb-5 text-sm text-slate-500">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LitSurvery;
