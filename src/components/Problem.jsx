import problemImg from "../assets/icon/problem.png";

const Problem = () => {
  const question =
    "How can technology be used to create educational apps for children that combine learning activities with physical movement? This would help kids develop balance while ensuring they stay active.";

  return (
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
      <div className="text-4xl font-bold text-gray-800">
        {question}
      </div>
    </div>
  );
};

export default Problem;
