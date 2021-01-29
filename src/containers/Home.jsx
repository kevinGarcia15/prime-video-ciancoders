import React, { Fragment} from "react";
import Carusel from "../components/Carusel";
import Categories from "../components/Categories";
import CategoryItems from "../components/CategoryItems";

function Home() {
  return (
    <div className="lg:col-span-10 col-span-12 backgound-secundary">
      <div className=" flex flex-col">
        <Carusel />
        <Categories title="Amazon Originals and Exclusives">
          <Fragment>
            <CategoryItems/>
          </Fragment>
          <Fragment>
            <CategoryItems/>
          </Fragment>
          <Fragment>
            <CategoryItems/>
          </Fragment>
          <Fragment>
            <CategoryItems/>
          </Fragment>
          <Fragment>
            <CategoryItems/>
          </Fragment>
        </Categories>
      </div>
    </div>
  );
}

export default Home;
