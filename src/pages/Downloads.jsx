import Docs from "../components/Docs";
import Presentation from "../components/Presentation";

const Downloads = () => {
  return (
    <div>
      <h1 className="ml-20 text-3xl font-bold text-gray-800">
        Download Project Documents and Presentations here.
      </h1>
      <Docs />
      <Presentation />
    </div>
  );
};

export default Downloads;
