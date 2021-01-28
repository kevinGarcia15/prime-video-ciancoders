import React from "react";

import Carusel_1 from "../assets/img/carusel-1.jpg";
import "../assets/css/carusel.css";

function Carusel() {
  return (
    <div className="h-2/6 overflow-hidden">
        <img src={Carusel_1} alt="carousel 1"/>
    </div>
  );
}

export default Carusel;
