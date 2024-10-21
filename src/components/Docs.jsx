import React from "react";
import { FileDown } from "lucide-react";

const Docs = () => {
  const phases = [
    {
      title: "Topic Assessment",
      description:
        "Define project objectives and stakeholders. Identify the project leader and team members.",
      fileUrl:
        "https://drive.google.com/drive/folders/1TVDkgq4h9tNI5rWUWfiNfEC8nWLVRULZ?usp=sharing",
    },
    {
      title: "Proposal Reports",
      description: "Create a project schedule with milestones and deadlines.",
      fileUrl:
        "https://drive.google.com/drive/folders/1vfsjsJLcKJ1eP8ILaQ1RtcEL6jsdozx9?usp=sharing",
    },
    {
      title: "Status Documents",
      description:
        "Monitor progress and performance. Ensure that tasks are completed as per the schedule.",
      fileUrl:
        "https://drive.google.com/drive/folders/15gxr_fUJ_wsdt21e_MpMO4OttiU5FhBc?usp=sharing",
    },
    {
      title: "Logbooks",
      description:
        "Compare actual performance with the planned schedule. Make necessary adjustments.",
      fileUrl:
        "https://drive.google.com/drive/folders/1XI1MVVxExBAJIyJ5vwqUsaH5XpTukrrL?usp=sharing",
    },
    {
      title: "Final Documents",
      description:
        "Finalize project deliverables and ensure they meet the objectives.",
      fileUrl:
        "https://drive.google.com/drive/folders/1IlRHFrNdDcrFBRXGxVDhK0YrtQUCoTLR?usp=sharing",
    },
  ];

  return (
    <div className="flex items-center justify-center p-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
        {phases.map((phase, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center mb-4">
              <a href={phase.fileUrl} download>
                <div className="p-4 text-4xl bg-white rounded-full">
                  <FileDown size={40} color="#F79733" />
                </div>
              </a>
            </div>
            <h3 className="mb-2 text-lg font-bold">{phase.title}</h3>
            <p className="text-sm text-gray-700">{phase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Docs;
