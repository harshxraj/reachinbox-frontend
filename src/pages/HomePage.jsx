import React, { useContext } from "react";
import { IoMdMailUnread } from "react-icons/io";
import { ThemeContext } from "../Context/ThemeContext";

const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const currentUrl = window.location.href;

  const url = new URL(currentUrl);

  const token = url.searchParams.get("token");

  console.log(token);

  return (
    <div
      className={`flex justify-center items-center h-[90vh] w-full ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* <div className="p-4 bg-[#1f1f1f] w-full text-white">Onebox</div> */}
      <div className="flex justify-center m-auto items-center flex-col">
        <img src="./inbox.png" alt="" />
        <h1 className="text-3xl mb-3 mt-6">
          It is a begginnig of a legendary sales pipeline
        </h1>

        <p className="max-w-[250px] text-center text-slate-500">
          When you have inbound E-mails you'll see them here
        </p>
      </div>
    </div>
  );
};

export default HomePage;
