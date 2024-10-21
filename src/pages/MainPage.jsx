import NavBar from "../components/NavBar";
import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
import { Downloads } from "./Downloads";

import React from "react";

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#F79733" }}>
      <NavBar />
      <Aboutus />
      <Contactus />
      <Downloads/>
      
    </div>
  );
};

export default MainPage;
