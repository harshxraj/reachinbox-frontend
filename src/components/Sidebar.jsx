import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaInbox } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { IoMdMail, IoMdSad } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { FaList } from "react-icons/fa6";
import { MdBarChart } from "react-icons/md";
import { ThemeContext } from "../Context/ThemeContext";

const Sidebar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme == "light" ? "bg-purple-100" : "bg-[#101113]"
      } text-white w-14 fixed top-0 left-0 h-[100vh] flex flex-col justify-between py-4 items-center`}
    >
      <div>
        <img src="./logo.jpg" alt="" className="w-10" />
      </div>

      <ul
        className={`flex flex-col ${
          theme === "dark" ? "text-slate-300" : "text-[#252525]"
        } gap-10 justify-center items-center `}
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black bg-gray-100 rounded-sm "
              : ""
          }
        >
          <li className="p-1">
            <FaHome size={22} />
          </li>
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black bg-gray-100 rounded-sm "
              : ""
          }
        >
          <li className="p-1">
            <MdPersonSearch size={24} />
          </li>
        </NavLink>

        <NavLink
          to="/mails"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black bg-gray-100 rounded-sm "
              : ""
          }
        >
          <li className="p-1">
            <IoMdMail size={24} />
          </li>
        </NavLink>

        <NavLink
          to="/sent"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black bg-gray-100 rounded-sm "
              : ""
          }
        >
          <li className="p-1">
            <IoIosSend size={24} />
          </li>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black bg-gray-100 rounded-sm "
              : ""
          }
        >
          <li className="p-1">
            <FaList size={22} />
          </li>
        </NavLink>

        <NavLink
          to="/messages"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black bg-gray-100 rounded-sm "
              : ""
          }
        >
          <li className="p-1">
            <FaInbox size={22} />
          </li>
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-black bg-gray-100 rounded-sm "
              : ""
          }
        >
          <li className="p-1">
            <MdBarChart size={24} />
          </li>
        </NavLink>
      </ul>

      <div className="bg-green-900 size-10 rounded-full flex items-center justify-center">
        SR
      </div>
    </div>
  );
};

export default Sidebar;
