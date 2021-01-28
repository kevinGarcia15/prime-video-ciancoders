import React from "react";
import {Link} from 'react-router-dom'

import prime_video from "../assets/img/prime-video-logo.svg"
import Search from "../assets/img/search-icon.svg";
import Home from "../assets/img/home.svg"
import Store from "../assets/img/store.svg"
import Channel from "../assets/img/connections.svg"
import myStuff from "../assets/img/user.svg"
import Download from "../assets/img/down-arrow.svg"
import Kids from "../assets/img/kids.svg"

function sidevar() {
  return (
    <div class="backgound-primary relative h-full min-h-screen col-span-2">
      <div className="flex mt-2 items-center">
        <div class="px-4 cursor-pointer" id="burger">
          <svg
            class="w-8 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div>
          <img className="w-32" src={prime_video} alt="prime video"/>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={Search} alt=""/>
          <input className="backgound-primary border-gray-500 border-2 p-1 rounded-sm text-gray-400 tracking-wider" type="search" placeholder="Search"/>
        </div>
        <Link to="/" className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={Home} alt="home"/>
          <span className="text-gray-500 font-bold text-base tracking-wider">Home</span>
        </Link>
        <Link to="/" className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={Store} alt="Store"/>
          <span className="text-gray-500 font-bold text-base tracking-wider">Store</span>
        </Link>
        <Link to="/" className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={Channel} alt="Channel"/>
          <span className="text-gray-500 font-bold text-base tracking-wider">Channels</span>
        </Link>
        <Link to="/" className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={myStuff} alt="myStuff"/>
          <span className="text-gray-500 font-bold text-base tracking-wider">My Stuffs</span>
        </Link>
        <Link to="/" className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={Download} alt="Download"/>
          <span className="text-gray-500 font-bold text-base tracking-wider">Downloads</span>
        </Link>
        <Link to="/" className="flex m-3 mb-5">
          <img className="w-6 mr-2" src={Kids} alt="Kids"/>
          <span className="text-gray-500 font-bold text-base tracking-wider">Kids</span>
        </Link>
      </div>
    </div>
  );
}

export default sidevar;
