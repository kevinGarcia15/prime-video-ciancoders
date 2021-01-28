import React from "react";
import Carusel from "../components/Carusel";
import Categories from "../components/Categories"
import CategoryItems from "../components/CategoryItems";

function Home() {
  return (
    <div className="col-span-10 backgound-secundary">
      <div className=" flex flex-col h-screen">
         <Carusel />
         <Categories title="Amazon Originals and Exclusives">
         <CategoryItems/>
          <CategoryItems/>
         </Categories>
      </div>
    </div>
  );
}

export default Home;
