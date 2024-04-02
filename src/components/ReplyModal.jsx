import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdCode } from "react-icons/io";
import { IoMdFlash } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaEye, FaSmile } from "react-icons/fa";
import { MdInsertLink, MdInsertPhoto, MdOutlinePerson } from "react-icons/md";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

const ReplyModal = ({ isOpen, onClose }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const selected_thread = useSelector((store) => store.threads.selectedThread);

  const [email, setEmail] = useState({
    subject: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleVariables = (value) => {};

  const [body, setBody] = useState("");
  const [preview, setPreview] = useState(false);
  const [showVariables, setShowVariables] = useState(false);

  console.log(email);

  const togglePreview = () => {
    setPreview(!preview);
  };

  const toggleVaiables = () => {
    setShowVariables((prev) => !prev);
  };

  const bodyData = {
    toName: "Mitrajit",
    to: selected_thread[0]?.toEmail,
    from: selected_thread[0]?.fromEmail,
    fromName: selected_thread[0]?.fromName,
    subject: email.subject,
    body: email.body,
    references: [
      "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",
      "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",
      "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",
      "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>",
    ],
    inReplyTo: "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>",
  };

  const handleReply = async () => {
    try {
      var x = toast.loading("Sending");
      const response = await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${selected_thread[0]?.threadId}`,
        bodyData,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      toast.dismiss(x);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
          <Toaster />
          <div className="fixed inset-0 transition-opacity bg-black opacity-50"></div>
          <motion.div
            className={`relative top-14 -right-9 z-20 ${
              theme === "dark"
                ? "bg-[#141517] text-white"
                : "text-slate-800 bg-white"
            } rounded-lg w-[830px]`}
            initial={{ opacity: 0, translateX: "-100%", translateY: "100%" }}
            animate={{ opacity: 1, translateX: "0%", translateY: "0%" }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={onClose}
              className={`absolute top-0 right-0 p-4 ${
                theme === "light" ? "text-slate-800" : "text-gray-200"
              } hover:text-gray-700`}
            >
              <AiOutlineClose />
            </button>
            <div
              className={`flex items-center ${
                theme === "dark"
                  ? "bg-[#23272c]"
                  : "bg-purple-100 text-black border-b"
              } p-3 rounded-md pl-8`}
            >
              <h1 className=" text-center font-light text-xl">Reply</h1>
            </div>

            <motion.div
              initial={{ opacity: 0, translateY: "100%" }}
              animate={{ opacity: 1, translateY: "0%" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex pl-8 items-center gap-4 py-1 pt-2"
            >
              <label className="text-slate-500">To: </label>
              <input
                type="text"
                className="font-light w-full p-1 bg-transparent focus:border-transparent focus:border-none focus:outline-none"
                onChange={handleChange}
                name="to"
                value={selected_thread[0]?.toEmail}
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
              <label className="text-slate-500">From: </label>
              <input
                type="text"
                className="font-light w-full p-1 bg-transparent focus:border-transparent focus:border-none focus:outline-none"
                onChange={handleChange}
                name="from"
                value={selected_thread[0]?.fromEmail}
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
              <label className="text-slate-500">Subject: </label>
              <input
                type="text"
                className="font-light w-full p-1 bg-transparent focus:outline-none focus:ring-0"
                name="subject"
                value={email.subject}
                onChange={handleChange}
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
              <div className="h-[300px]">
                {preview ? (
                  <div
                    className={`break-words ${
                      theme == "light"
                        ? "bg-gray-200 text-slate-700 font-light"
                        : "bg-black/50"
                    } w-[780px] p-2 rounded-md h-full text-green-100`}
                  >
                    {email.body}
                  </div>
                ) : (
                  <textarea
                    type="text"
                    className="w-full bg-transparent focus:outline-none focus:ring-0 col-30 resize-none"
                    name="body"
                    placeholder="Body"
                    style={{ height: "300px" }}
                    value={email.body}
                    onChange={handleChange}
                    cols={95}
                  />
                )}
              </div>
            </motion.div>

            <hr
              className={`border ${
                theme == "dark"
                  ? "border-white/30"
                  : "border-black/10 border-1 "
              }`}
            />

            <div className="pl-8 mt-2 flex items-center gap-2 pb-3">
              <button
                onClick={handleReply}
                className={`bg-gradient-to-r ${
                  theme === "light" && "text-white"
                } from-blue-400 to-blue-800 flex px-8 py-2 rounded-md items-center gap-2`}
              >
                Reply
                <IoIosArrowDropdown />
              </button>

              <div
                onClick={toggleVaiables}
                className={`px-2 rounded-md flex gap-2 relative hover:cursor-pointer ${
                  theme == "dark" ? "text-slate-300" : "text-slate-800"
                } ${
                  showVariables && "bg-gray-600 text-white"
                } items-center ml-3`}
              >
                {showVariables && (
                  <div
                    className={`${
                      theme == "light" && "bg-gray-600"
                    } absolute flex flex-col gap-1 -top-[137px] right-0 w-full h-[135px] bg-slate-900 rounded-md p-2`}
                  >
                    <div
                      onClick={() =>
                        setEmail({
                          ...email,
                          body:
                            email.body +
                            " " +
                            selected_thread[0]?.fromName +
                            " ",
                        })
                      }
                    >
                      FromName
                    </div>
                    <hr />
                    <div
                      onClick={() =>
                        setEmail({
                          ...email,
                          body:
                            email.body +
                            " " +
                            selected_thread[0]?.fromEmail +
                            " ",
                        })
                      }
                    >
                      FromEmail
                    </div>
                    <hr />
                    <div
                      onClick={() =>
                        setEmail({
                          ...email,
                          body:
                            email.body + " " + selected_thread[0]?.toName + " ",
                        })
                      }
                    >
                      ToName
                    </div>
                    <hr />
                    <div
                      onClick={() =>
                        setEmail({
                          ...email,
                          body: email.body + selected_thread[0]?.toEmail + " ",
                        })
                      }
                    >
                      ToEmail
                    </div>
                  </div>
                )}
                <IoMdFlash size={20} />
                Variables
              </div>

              <div
                className={`flex gap-2 px-2 rounded-md hover:cursor-pointer ${
                  theme == "dark" ? "text-slate-300" : "text-slate-800"
                } ${preview && "bg-gray-600 text-white"} items-center ml-3`}
                onClick={togglePreview}
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
