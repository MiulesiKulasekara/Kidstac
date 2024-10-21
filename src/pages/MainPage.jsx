import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
import Downloads  from "./Downloads";
import ProjectScope from "./ProjectScope";

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#F79733" }}>
      
      <NavBar />
      <HeroSection/>
      <ProjectScope/>
      <Aboutus />
      <Contactus />
      <Downloads/>

      
    </div>
  );
};

export default MainPage;
