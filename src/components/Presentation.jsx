import { MonitorDown } from "lucide-react";

const Presentation = () => {
  const phases = [
    {
      title: "Proposal Presentation",
      description:
        "Define project objectives and stakeholders. Identify the project leader and team members.",
      fileUrl:
        "https://drive.google.com/drive/folders/1A1zWrOgGPQIHJuPHnM2PBQvAiKliMgg8?usp=sharing",
    },
    {
      title: "Progress Presentation - I",
      description: "Create a project schedule with milestones and deadlines.",
      fileUrl:
        "https://drive.google.com/drive/folders/1FvGV6v3qEtto3IMOADf5q626xRwlkDZn?usp=sharing",
    },
    {
      title: "Progress Presentation - II",
      description:
        "Monitor progress and performance. Ensure that tasks are completed as per the schedule.",
      fileUrl:
        "https://drive.google.com/drive/folders/1T5ax-EVacXkmpMvu7eAU7vHfJmtNmNxn?usp=sharing",
    },
    {
      title: "Final Presentation",
      description:
        "Compare actual performance with the planned schedule. Make necessary adjustments.",
      fileUrl:
        "https://drive.google.com/drive/folders/199bZL-DX0xyCmhUS9Plyl2GZINZKrcEL?usp=sharing",
    },
  ];

  return (
    <section id="kidstc-presentation">
    <div className="flex items-center justify-center p-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 justify-items-center">
        {phases.map((phase, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center mb-4">
              <a href={phase.fileUrl} download>
                <div className="p-4 text-4xl bg-white rounded-full">
                  <MonitorDown size={40} color="#F79733" />
                </div>
              </a>
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">{phase.title}</h3>
            <p className="text-sm text-slate-300">{phase.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Presentation;
