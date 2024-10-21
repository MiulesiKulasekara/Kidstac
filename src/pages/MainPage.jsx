import NavBar from "../components/NavBar";
import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
import ResearchDashboard from "../components/ResearchDashboard";
import Milestone from "../components/Milestone";

import React from "react";

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#F79733" }}>
      <NavBar />
      <Aboutus />
      <Contactus />
    </div>
  );
};

export default MainPage;
