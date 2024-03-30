import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../Context/ThemeContext";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const Example = () => {
  const [selected, setSelected] = useState("light");
  return (
    <div
      className={`grid h-[200px] place-content-center px-4 transition-colors ${
        selected === "light" ? "bg-white" : "bg-slate-900"
      }`}
    >
      {/* <SliderToggle selected={selected} setSelected={setSelected} /> */}
    </div>
  );
};

export const SliderToggle = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          theme === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          changeTheme("light");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10"></span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          theme === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          changeTheme("dark");
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10"></span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          theme === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default Example;
