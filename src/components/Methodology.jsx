import React from "react";
import systemDiagram from "../assets/diagram/b.png";

const Methodology = () => {
  return (
    <section id="kidstc-methodology">
      <div className="min-h-0.5"></div>
      <div style={{ backgroundColor: "#232b2b" }} className="px-20 pt-20 pb-20">
        <div>
          <h1 className="mb-8 text-3xl font-bold" style={{ color: "#F79733" }}>
            Methodology
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 2/3 width column for the image */}
          <div className="flex justify-center md:col-span-2">
            <img
              src={systemDiagram}
              alt="System Diagram"
              className="w-full h-auto transform scale-100"
              style={{ maxWidth: "80%", transition: "transform 0.8s ease" }}
            />
          </div>
          {/* 1/3 width column for additional content */}
          <div className="text-white md:col-span-1">
            <p className="text-base ">
              {/* Add content here, such as a description or summary */}
              The KIDSTAC Mobile App makes learning fun for preschoolers through{" "}
              <b>Augmented Reality (AR)</b>, <b>Pose Detection (PD)</b>, and{" "}
              <b>Object Detection (OD)</b> activities that blend mental and
              physical engagement. Kids can log in to track their progress, then
              explore activities from a main menu. In the <b>Virtual Zoo</b>{" "}
              (AR), they see animals up close, sparking curiosity.{" "}
              <b>Pose Detection</b> tracks exercise movements, offering
              real-time feedback, while <b>Object Detection</b> helps them
              recognize shapes and colors around them. Using tools like{" "}
              <b>Unity</b>, <b>Mediapipe</b>, and <b>AWS Rekognition</b>,
              KIDSTAC provides interactive, rewarding experiences, with progress
              saved in <b>Firebase</b> for parents and teachers to monitor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
