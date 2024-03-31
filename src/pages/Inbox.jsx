import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineReply } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";

import InboxSidebar from "../components/InboxSidebar";
import { ThemeContext } from "../Context/ThemeContext";
import InboxRightSidebar from "../components/InboxRightSidebar";
import { getFullDayWithTime } from "../utils/getDate";
import ReplyModal from "../components/ReplyModal";
import DeleteModal from "../components/DeleteModal";

const Inbox = () => {
  const replyButtonRef = useRef(null);
  const deleteButtonRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [deleteModalOpen, setDeleteOpenModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "r") {
        if (replyButtonRef.current) {
          replyButtonRef.current.click();
        }
      } else if (event.key.toLowerCase() == "d" && isOpen === false) {
        if (deleteButtonRef.current) {
          deleteButtonRef.current.click();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);
  const { theme, setTheme } = useContext(ThemeContext);
  const selected_thread = useSelector((store) => store.threads.selectedThread);
  const loading = useSelector((store) => store.threads.fetchingThreadsLoading);

  console.log(selected_thread);

  const openDeleteModal = () => {
    setDeleteOpenModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteOpenModal(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`flex h-full ${
        theme == "dark" ? "bg-black text-white" : "bg-white flex"
      }`}
    >
      <InboxSidebar />

      {/* Middle Part */}
      <div className="flex-grow p-4">
        {loading ? (
          <>
            <div className="flex flex-col gap-3">
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-14 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-44 my-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-44 my-2 w-full`}
              ></div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <div
                className={`${theme === "light" && "text-black"} flex flex-col`}
              >
                <p>{selected_thread[0]?.fromName}</p>
                <p>{selected_thread[0]?.fromEmail}</p>
              </div>

              <div
                className={`${
                  theme == "dark" ? "text-black" : "text-white"
                } flex font-light`}
              >
                <div className="flex items-center">
                  <button ref={deleteButtonRef} onClick={openDeleteModal}>
                    <MdOutlineDeleteOutline
                      className="text-red-400 mr-2 hover:cursor-pointer"
                      size={26}
                    />
                  </button>
                </div>
                <div>
                  <select
                    className={`p-1 rounded-md mr-3  border-2 border-black/50 ${
                      theme === "dark"
                        ? "bg-[#1f1f1f] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <option value="option1">Meeting Completed</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div>
                  <select
                    className={`p-1 rounded-md mr-3  border-2 border-black/50 ${
                      theme === "dark"
                        ? "bg-[#1f1f1f] text-white"
                        : "text-black bg-white"
                    }`}
                  >
                    <option value="option1">Move</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div
                  className={`border-2 border-black/50 size-8 rounded-md flex items-center justify-center ${
                    theme === "dark" ? "bg-[#1f1f1f] text-white" : "text-black"
                  }`}
                >
                  <BsThreeDots className="" />
                </div>
              </div>
            </div>

            <hr
              className={`mt-3 ${
                theme === "dark" ? "border-white/30" : "border-black/30"
              }  h-2 border-t-2`}
            />

            {selected_thread?.map((msg) => (
              <div
                key={msg.id}
                className={`${
                  theme == "light"
                    ? "bg-white border-2 text-black"
                    : "bg-[#141517]"
                } p-4 mt-2 rounded-md`}
              >
                <div className="flex justify-between">
                  <h1 className="font-medium text-lg">{msg?.subject}</h1>
                  <p className="text-sm text-slate-600">
                    {getFullDayWithTime(msg?.sentAt)}
                  </p>
                </div>
                <div className="flex gap-4 text-slate-500 mt-2 mb-2">
                  <p>From: {msg?.fromEmail}</p>
                  <p>CC: {msg?.cc}</p>
                </div>

                <p className="flex gap-4 mb-6 text-slate-500">
                  To: {msg?.toEmail}
                </p>

                <div
                  className="text-sm font-light"
                  dangerouslySetInnerHTML={{ __html: msg?.body }}
                />
              </div>
            ))}

            {}
          </>
        )}

        <div className="fixed bottom-5" onClick={openModal}>
          <button
            ref={replyButtonRef}
            className={`bg-gradient-to-r ${
              theme === "light" && "text-white"
            } from-blue-400 to-blue-800 flex px-8 py-2 rounded-md items-center gap-2`}
          >
            <MdOutlineReply /> Reply
          </button>
        </div>

        <div className="">
          <ReplyModal isOpen={isOpen} onClose={closeModal} />
        </div>
      </div>

      <DeleteModal isOpen={deleteModalOpen} onClose={closeDeleteModal} />

      <InboxRightSidebar />
    </div>
  );
};

export default Inbox;
