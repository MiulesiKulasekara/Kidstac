import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Aboutus from "../components/Aboutus";
import Downloads  from "./Downloads";
import ProjectScope from "./ProjectScope";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#F79733" }}>
      
      <NavBar />
      <HeroSection/>
      <ProjectScope/>
      <Downloads/>
      <Aboutus />  
      <Footer/>
    </div>
  );
};

export default MainPage;
