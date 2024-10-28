import Docs from "../components/Docs";
import Presentation from "../components/Presentation";

const Downloads = () => {
  return (
    <section id="kidstc-downloads">
      <div className="min-h-0.5"></div>
      <div style={{ backgroundColor: "#232b2b" }} className="px-20 pt-40 pb-40">
        <div>
          <h1
            className="mb-8 text-3xl font-bold text-left"
            style={{ color: "#F79733" }}
          >
            Downloads
          </h1>
        </div>

        <Docs />
        <Presentation />
      </div>
    </section>
  );
};

export default Downloads;
