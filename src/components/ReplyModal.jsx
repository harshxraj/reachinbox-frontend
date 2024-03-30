import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdCode } from "react-icons/io";
import { IoMdFlash } from "react-icons/io";
import { FaEye, FaSmile } from "react-icons/fa";
import { MdInsertLink, MdInsertPhoto, MdOutlinePerson } from "react-icons/md";
import { motion } from "framer-motion";

const ReplyModal = ({ isOpen, onClose }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [priority, setPriority] = useState("");
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "",
    status: "pending",
  });

  useEffect(() => {
    setTask((prevTask) => ({
      ...prevTask,
      priority: priority,
    }));
  }, [priority]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = () => {};

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
          <div className="fixed inset-0 transition-opacity bg-black opacity-50"></div>
          <motion.div
            className={`relative z-20 ${
              theme === "dark" ? "bg-[#1f1f1f]" : "bg-white"
            } rounded-lg w-[810px]`}
            initial={{ opacity: 0, translateX: "-100%", translateY: "100%" }}
            animate={{ opacity: 1, translateX: "0%", translateY: "0%" }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={onClose}
              className="absolute top-0 right-0 p-4 text-gray-500 hover:text-gray-700"
            >
              <AiOutlineClose />
            </button>
            <div className="flex items-center bg-slate-800 p-3 rounded-md pl-8">
              <h1 className="rounded-lg text-center font-light text-sm text-white">
                Reply
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: "0%" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex pl-8 items-center gap-4 py-1 pt-2"
            >
              <label>To: </label>
              <input
                type="text"
                className="w-full p-1 bg-transparent focus:border-transparent focus:border-none focus:outline-none"
                onChange={handleChange}
                name="to"
              />
            </motion.div>

            <hr
              className={`border ${
                theme == "dark" ? "border-white/30" : "border-black/10"
              }`}
            />

            <motion.div
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: "0%" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex pl-8 items-center gap-4 py-1 pt-2"
            >
              <label>From: </label>
              <input
                type="text"
                className="w-full p-1 bg-transparent focus:border-transparent focus:border-none focus:outline-none"
                onChange={handleChange}
                name="from"
              />
            </motion.div>

            <hr
              className={`border  ${
                theme == "dark" ? "border-white/30" : "border-black/10"
              }`}
            />
            <motion.div
              className={`flex pl-8 items-center gap-4 py-1 pt-2`}
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: "0%" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <label>Subject: </label>
              <input
                type="text"
                className="w-full p-1 bg-transparent focus:outline-none focus:ring-0"
                onChange={handleChange}
                name="from"
                value={"fsdfkl"}
              />
            </motion.div>

            <hr
              className={`border ${
                theme == "dark" ? "border-white/30" : "border-black/10"
              }`}
            />

            <motion.div
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: "0%" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex pl-8 items-center gap-4 py-1 pt-2"
            >
              <textarea
                type="text"
                className="w-full p-1 bg-transparent focus:outline-none focus:ring-0 col-30 resize-none"
                onChange={handleChange}
                name="from"
                placeholder="Body"
                style={{ height: "300px" }}
              />
            </motion.div>

            <hr
              className={`border ${
                theme == "dark"
                  ? "border-white/30"
                  : "border-black/10 border-1 "
              }`}
            />

            <div className="pl-8 mt-2 flex items-center gap-2 pb-3">
              <button className="bg-blue-600 px-10 py-2 rounded-md">
                Send
              </button>

              <div
                className={`flex gap-2 ${
                  theme == "dark" ? "text-slate-300" : "text-slate-800"
                } items-center ml-3`}
              >
                <IoMdFlash size={20} />
                Variables
              </div>

              <div
                className={`flex gap-2 ${
                  theme == "dark" ? "text-slate-300" : "text-slate-800"
                } items-center ml-3`}
              >
                <FaEye size={20} />
                Preview Email
              </div>

              <div
                className={`flex gap-4 items-center ml-3 ${
                  theme == "dark" ? "text-slate-300" : "text-slate-800"
                }`}
              >
                <h1>A</h1>
                <MdInsertLink size={20} />
                <MdInsertPhoto size={20} />
                <FaSmile size={20} />
                <MdOutlinePerson size={20} />
                <IoMdCode size={20} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ReplyModal;
