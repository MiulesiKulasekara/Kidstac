import React from "react";

const Gap = () => {
  return (
    <section id="kidstc-gap">
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Research Gaps in Preschool Education Apps
          </h2>
          <p className="mb-4 text-lg text-gray-700">
            Below are some key gaps identified in the current preschool
            educational apps:
          </p>
          <ul className="ml-6 space-y-3 text-gray-700 list-disc">
            <li>
              <strong>Physical Skill Development:</strong> Limited focus on apps
              that promote motor coordination and physical activities for
              preschoolers.
            </li>
            <li>
              <strong>Real-Time Feedback:</strong> Lack of apps providing
              immediate feedback on physical activities.
            </li>
            <li>
              <strong>New Technologies in Preschool Applications:</strong>{" "}
              Insufficient exploration of Pose detection technology, Augmented
              Reality, Object Detection, and Voice Recognition in preschool
              education.
            </li>
            <li>
              <strong>Tailored Educational Content:</strong> Need for apps that
              target specific developmental needs beyond cognitive skills.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Gap;
