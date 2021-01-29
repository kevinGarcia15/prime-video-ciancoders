import React, { Fragment, useRef } from "react";

import Glide from "react-glidejs";
import "../assets/css/transitions.css";
import "react-glidejs/dist/index.css";
import carousel_1 from "../assets/img/carousel-1.jpg";
import carousel_2 from "../assets/img/carousel-2.jpg";
import carousel_3 from "../assets/img/carousel-3.webp"

function Carusel() {
  const gliderRef = useRef(null);

  return (
    <div className="h-96 overflow-hidden">
      <Glide
        ref={gliderRef}
        throttle={0}
        type="carousel"
        customSlideAnimation={{
          timeout: 500,
          classNames: "fade",
        }}
        peek={{
          before: 500,
          after: 500,
        }}
        perView={1}
        startAt={1}
        slideClassName="slider__frame"
        focusAt="center"
      >
        <Fragment>
          <img src={carousel_1} alt="carousel 1" />
        </Fragment>
        <Fragment>
          <img src={carousel_3} alt="carousel 2" />
        </Fragment>
        <Fragment>
          <img src={carousel_2} alt="carousel 3" />
        </Fragment>
      </Glide>
    </div>
  );
}

export default Carusel;
