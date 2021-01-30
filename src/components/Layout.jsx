import React,{useEffect} from "react";

import Sidebar from "../containers/Sidebar";

function Layout({ children }) {
  const [statusSidebar, setStatusSidebar] = React.useState(true);
  useEffect(() => {
  });
  function handleSidebar() {
    if (statusSidebar) {
      let childrens = document.querySelector("#children");
      childrens.classList.remove("lg:col-span-10");
      childrens.classList.add("lg:col-span-11");
      setStatusSidebar(false);
    } else {
      let childrens = document.querySelector("#children");
      childrens.classList.remove("lg:col-span-11");
      childrens.classList.add("lg:col-span-10");
      setStatusSidebar(true);
    }
  }
  

    return (
    <div className="grid grid-cols-12">
      <Sidebar onClickSidebar={handleSidebar} status={statusSidebar} />
      <div className="lg:col-span-10 col-span-12 backgound-secundary h-screen lg:h-full" id="children">
      {children}
      </div>
    </div>
  );
}

export default Layout;
