import React, { useContext } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import dayjs from "dayjs";

import { ThemeContext } from "../Context/ThemeContext";
import { getDay } from "../utils/getDate";
import { useSelector } from "react-redux";

const ThreadCard = ({ fromEmail, subject, sentAt, onClick, threadId }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const selected_thread = useSelector((store) => store.threads.selectedThread);

  return (
    <div
      className={`py-1 ${
        threadId === selected_thread[0]?.threadId
          ? "border-l-4 border-sky-700"
          : "border-l-4 border-transparent"
      } mt-1 mb-4 pl-2 hover:cursor-pointer`}
      onClick={() => onClick(fromEmail)}
    >
      <div className="flex gap-4 justify-between">
        <p className="">{fromEmail}</p>
        <p
          className={`text-sm ${
            theme == "light" ? "font-extralight" : "font-thin"
          }`}
        >
          {getDay(sentAt)}
        </p>
      </div>

      <p className="font-extralight line-clamp-1">{subject}</p>

      <div className="flex text-sm font-light mt-2 gap-3">
        <div className="flex items-center gap-2 text-green-500 bg-[#1f1f1f] px-1 rounded-md">
          <GoDotFill /> Interested
        </div>
        <div className="flex items-center gap-2 text-slate-300 bg-[#1f1f1f] px-1 rounded-md">
          <IoIosSend /> Campaign Name
        </div>
      </div>

      {/* <hr
        className={`mt-3 ${
          theme === "dark" ? "border-white/30" : "border-black/30"
        }  h-2 border-t-2`}
      /> */}
    </div>
  );
};

export default ThreadCard;
