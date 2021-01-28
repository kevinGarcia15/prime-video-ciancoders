import React from "react";

function Categories({ children, title }) {
  return (
    <div className="h-80 m-6 mt-8">
      <div className="flex items-end">
        <h3 className="mr-3 text-5xl font-bold secondary-color">Prime</h3>
        <span className="text-indigo-100 text-3xl font-bold">{title}</span>
      </div>
      <div className="grid grid-cols-12">
      {children}
      </div>
    </div>
  );
}

export default Categories;
