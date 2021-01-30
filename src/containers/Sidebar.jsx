import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import prime_video from "../assets/img/prime-video-logo.svg";
import Search from "../assets/img/search-icon.svg";
import Home from "../assets/img/home.svg";
import Store from "../assets/img/store.svg";
import Channel from "../assets/img/connections.svg";
import myStuff from "../assets/img/user.svg";
import Download from "../assets/img/down-arrow.svg";
import Kids from "../assets/img/kids.svg";

function Sidebar(props) {
  useEffect(() => {
    handleSlidebar();
  });

  const handleSlidebar = () => {
    let slidebar = document.querySelector("#slidebar");
    if (props.status) {
      slidebar.classList.remove("lg:col-span-1");
      slidebar.classList.add("lg:col-span-2");
    } else {
      slidebar.classList.remove("lg:col-span-2");
      slidebar.classList.add("lg:col-span-1");
    }
  };

  return (
    <div
      id="slidebar"
      className="backgound-primary relative lg:col-span-2 lg:block hidden"
    >
      <div className="flex mt-2 items-center">
        <div
          className="m-3 mb-4 cursor-pointer"
          id="burger"
          onClick={props.onClickSidebar}
        >
          <svg
            className="w-8 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div style={{ display: props.status ? "block" : "none" }}>
          <img className="w-32" src={prime_video} alt="prime video" />
        </div>
      </div>

      <div className="flex flex-col">
        <div
          className="flex m-3 mb-5"
          style={{ display: props.status ? "flex" : "none" }}
        >
          <img className="w-6 mr-2" src={Search} alt="" />
          <input
            className="backgound-primary border-gray-500 border-2 p-1 rounded-sm text-gray-400 tracking-wider"
            type="search"
            placeholder="Search"
          />
        </div>
        <Link to="/" className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={Home} alt="home" />
          <span
            className="text-gray-500 font-bold text-base tracking-wider description"
            style={{ display: props.status ? "block" : "none" }}
          >
            Home
          </span>
        </Link>
        <Link to="/" className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={Store} alt="Store" />
          <span
            className="text-gray-500 font-bold text-base tracking-wider description"
            style={{ display: props.status ? "block" : "none" }}
          >
            Store
          </span>
        </Link>
        <Link to="/" className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={Channel} alt="Channel" />
          <span
            className="text-gray-500 font-bold text-base tracking-wider description"
            style={{ display: props.status ? "block" : "none" }}
          >
            Channels
          </span>
        </Link>
        <Link to="/" className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={myStuff} alt="myStuff" />
          <span
            className="text-gray-500 font-bold text-base tracking-wider description"
            style={{ display: props.status ? "block" : "none" }}
          >
            My Stuffs
          </span>
        </Link>
        <Link to="/" className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={Download} alt="Download" />
          <span
            className="text-gray-500 font-bold text-base tracking-wider description"
            style={{ display: props.status ? "block" : "none" }}
          >
            Downloads
          </span>
        </Link>
        <Link to="/" className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={Kids} alt="Kids" />
          <span
            className="text-gray-500 font-bold text-base tracking-wider description"
            style={{ display: props.status ? "block" : "none" }}
          >
            Kids
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
