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
          before: 0,
          after: 0,
        }}
        perView={1}
        startAt={0}
        slideClassName="slider__frame"
        focusAt={1}
      >
        <Fragment key="1">
          <img src={carousel_1} alt="carousel 1" />
        </Fragment>
        <Fragment key="2">
          <img src={carousel_2} alt="carousel 2" />
        </Fragment>
        <Fragment key="3">
          <img className="w-full" src={carousel_3} alt="carousel 3" />
        </Fragment>
      </Glide>
    </div>
  );
}

export default Carusel;
