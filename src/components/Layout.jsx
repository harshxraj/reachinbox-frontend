import React, { useContext, useState } from "react";
import Example, { SliderToggle } from "./ThemToggleBtn";
import { ThemeContext } from "../Context/ThemeContext";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <div
          className={`p-4 pl-20 bg-[#1f1f1f] ${
            theme == "light" && "bg-purple-100 text-slate-900"
          } text-white flex items-center justify-between`}
        >
          <h1
            className={`text-2xl font-medium ${
              theme == "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Onebox
          </h1>
          <SliderToggle />
        </div>
        <div className="flex-grow ml-12">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
