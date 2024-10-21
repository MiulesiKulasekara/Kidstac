import NavBar from "../components/NavBar";
import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
import Docs from "../components/Docs";

import React from "react";

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#F79733" }}>
      <NavBar />
      <Aboutus />
      <Contactus />
      <Docs/>
    </div>
  );
};

export default MainPage;
