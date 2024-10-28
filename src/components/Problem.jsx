import problemImg from "../assets/icon/problem.png";

const Problem = () => {
  const question =
    "How can technology be used to create educational apps for children that combine learning activities with physical movement? This would help kids develop balance while ensuring they stay active.";

  return (
    <section id="kidstc-problem">
      <div className="min-h-0.5"></div>
      <div style={{ backgroundColor: "#232b2b" }} className="px-20 pt-40 pb-40">
        <div>
          <h1 className="mb-8 text-3xl font-bold" style={{ color: "#F79733" }}>
            Research Problem
          </h1>
        </div>
        <div className="flex items-center justify-center w-full p-10">
          {/* Image Div */}
          <div
            className="bg-no-repeat"
            style={{
              backgroundImage: `url(${problemImg})`,
              backgroundSize: "300px 300px", // Larger image size
              minHeight: "300px", // Ensures enough height for the image
              minWidth: "300px", // Ensures the width for the image
            }}
          ></div>

          {/* Text next to the image */}
          <div className="ml-20 text-4xl font-bold text-white">{question}</div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
