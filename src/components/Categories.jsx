import React, {useRef } from "react";

import Glide from "react-glidejs";
import "../assets/css/transitions.css";
import "react-glidejs/dist/index.css";

function Categories({ children, title }) {
  const gliderRef = useRef(null);
  let perViewScrean
  if (window.screen.width < 600) {
    perViewScrean = 1
    console.log(perViewScrean)
  }else{
    perViewScrean = 3
    console.log(perViewScrean)
  }

  return (
    <div className="m-6 mt-8">
      <div className="flex items-end">
        <h3 className="mr-3 md:text-5xl text-2xl font-bold secondary-color ">prime</h3>
        <span className="text-indigo-100 text-lg md:text-3xl font-bold">{title}</span>
      </div>
      <Glide
        ref={gliderRef}
        throttle={0}
        type="slider"
        customSlideAnimation={{
          timeout: 500,
          classNames: "fade",
        }}
        peek={{
          before: 100,
          after: 0,
        }}
        perView={perViewScrean}
        startAt={0}
        slideClassName="slider__frame"
        focusAt={0}
      >
        {children}
      </Glide>
    </div>
  );
}

export default Categories;
