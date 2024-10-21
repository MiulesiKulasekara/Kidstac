import React, { useState } from "react";

const ResearchDashboard = () => {
  const [activePhase, setActivePhase] = useState(null);

  const phases = [
    {
      year: "March 2021",
      title: "Project Proposal",
      description:
        "Purpose: Present project for approval or funding.\nMarks Allocated: 6%",
      details: "This phase involves the initial proposal of the research idea, including the project's objectives, methodology, and expected outcomes.",
    },
    {
      year: "June 2021",
      title: "Progress Presentation I",
      description:
        "Purpose: Review 50% project completion and identify gaps.\nMarks Allocated: 6%",
      details: "This presentation reviews the progress at the midpoint, ensuring key milestones have been met and identifying areas for improvement.",
    },
    {
      year: "July 2021",
      title: "Research Paper",
      description:
        "Purpose: Contribute to existing knowledge, acknowledging references.\nMarks Allocated: 10%",
      details: "The research paper outlines the theoretical framework, previous studies, and how the project contributes to new insights.",
    },
    {
      year: "September 2021",
      title: "Progress Presentation II",
      description:
        "Purpose: Review 90% completion and present a poster summarizing the project.\nMarks Allocated: 18%",
      details: "Near project completion, this presentation shows how close the team is to finalizing the work and displays the summary in a poster format.",
    },
    {
      year: "October 2021",
      title: "Website Assessment",
      description:
        "Purpose: Create a website to promote and explain the project.\nMarks Allocated: 2%",
      details: "The project is showcased on a dedicated website to enhance visibility and communication of the project's objectives and results.",
    },
    {
      year: "November 2021",
      title: "Logbook",
      description:
        "Purpose: Validate project status through logbook entries and status documents.\nMarks Allocated: 3%",
      details: "The logbook records the day-to-day progress of the project to ensure that all tasks and responsibilities are documented.",
    },
    {
      year: "November 2021",
      title: "Final Report",
      description:
        "Purpose: Submit final reports evaluating the project.\nMarks Allocated: 19%",
      details: "The final report assesses the entire project, including successes, challenges, and recommendations for future work.",
    },
    {
      year: "November 2021",
      title: "Final Presentation & Viva",
      description:
        "Purpose: Individually assess each member’s contribution.\nMarks Allocated: 20%",
      details: "The viva evaluates each team member’s understanding and contribution to the project through individual assessments.",
    },
  ];

  const handlePhaseClick = (index) => {
    setActivePhase(index === activePhase ? null : index); // Toggle phase details
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between w-full">
          {phases.map((phase, index) => (
            <div key={index} className="relative text-center">
              {/* Circle */}
              <div
                className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full cursor-pointer"
                onClick={() => handlePhaseClick(index)}
              >
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
              {/* Line between circles */}
              {index !== phases.length - 1 && (
                <div className="absolute w-full h-px transform -translate-x-1/2 bg-gray-300 left-1/2 top-5"></div>
              )}
              {/* Year */}
              <p className="mt-2 text-sm font-bold">{phase.year}</p>
              {/* Title */}
              <p className="mt-1 text-sm">{phase.title}</p>

              {/* Details (show when active) */}
              {activePhase === index && (
                <div className="p-4 mt-4 bg-gray-100 rounded shadow-md">
                  <p className="text-gray-700 whitespace-pre-line">
                    {phase.details}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchDashboard;
