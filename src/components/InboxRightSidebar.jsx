import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { BsSendFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { MdEmail } from "react-icons/md";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { FaRegEnvelopeOpen } from "react-icons/fa6";

const InboxRightSidebar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const selected_thread = useSelector((store) => store.threads.selectedThread);
  const loading = useSelector((store) => store.threads.fetchingThreadsLoading);

  return (
    <div
      className={`border-l w-[300px]  ${
        theme === "dark" ? "border-white/30" : "border-black/30"
      }  `}
    >
      <div
        className={`bg-[#1f1f1f] h-10 flex items-center px-5 mt-2 rounded-md mx-2 text-white`}
      >
        Lead Details
      </div>

      <div className="h-[180px]">
        {loading ? (
          <>
            <div className="flex flex-col gap-3 rounded-sm pt-2 px-3 my-2 mb-2">
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-6 px-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-6 px-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-6 px-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-6 px-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-6 px-2 w-full`}
              ></div>
            </div>
          </>
        ) : (
          <>
            <div
              className={`px-3 pt-2 my-2 flex flex-col gap-4 text-sm ${
                theme === "dark" ? "text-gray-200" : "text-slate-800"
              }`}
            >
              <div className="flex justify-between">
                <div>Name: </div>
                <div>{selected_thread[0]?.fromName}</div>
              </div>

              <div className="flex justify-between">
                <div>Contact No: </div>
                <div>{+9213234343}</div>
              </div>

              <div className="flex justify-between">
                <div className="text-sm">Email ID: </div>
                <div className="text-sm">{selected_thread[0]?.fromEmail}</div>
              </div>

              <div className="flex justify-between">
                <div>Linkedin: </div>
                <div>linked.in/in/timvaddle</div>
              </div>

              <div className="flex justify-between">
                <div>Company Name: </div>
                <div>Reachinbox</div>
              </div>
            </div>
          </>
        )}
      </div>

      <div
        className={`bg-[#1f1f1f] h-10 flex items-center px-5 mt-2 rounded-md mx-2 text-white`}
      >
        Activites
      </div>

      <div className="px-3 pt-6">
        <div
          className={`${theme == "light" ? "text-slate-800" : "text-gray-200"}`}
        >
          <h1>Campaign Name</h1>

          <p>3 Steps | 5 Days in Sequence</p>
        </div>
        {loading ? (
          <>
            <div className="flex flex-col gap-3 rounded-sm pt-2 px-3 my-2 mb-2">
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-16 px-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-16 px-2 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-16 px-2 w-full`}
              ></div>
            </div>
          </>
        ) : (
          <div>
            <div className="flex gap-10 items-center  px-3 py-2 mt-2">
              <div className=" rounded-full size-12 text-white border bg-[#1f1f1f] text-2xl flex items-center justify-center">
                <MdEmail size={24} />
              </div>
              <div
                className={`${
                  theme == "dark" ? "text-gray-200" : "text-slate-800"
                } flex flex-col gap-2 font-light`}
              >
                <div>Step 1: Email</div>
                <div className="flex items-center ">
                  <BsSendFill className="mr-2" />
                  <p>Sent: 3rd Feb</p>
                </div>
              </div>
            </div>

            <div className="flex gap-10 items-center  px-3 py-2 mt-2">
              <div className=" rounded-full size-12 text-white border bg-[#1f1f1f] text-2xl flex items-center justify-center">
                <MdEmail size={24} />
              </div>
              <div
                className={`${
                  theme == "dark" ? "text-gray-200" : "text-slate-800"
                } flex flex-col gap-2 font-light`}
              >
                <div>Step 2: Email</div>
                <div className="flex items-center ">
                  <BsFillEnvelopeOpenFill className="mr-2 text-yellow-500" />
                  <p>Opened: 5th Feb</p>
                </div>
              </div>
            </div>
            <div className="flex gap-10 items-center  px-3 py-2 mt-2">
              <div className=" rounded-full size-12 text-white border bg-[#1f1f1f] text-2xl flex items-center justify-center">
                <MdEmail size={24} />
              </div>
              <div
                className={`${
                  theme == "dark" ? "text-gray-200" : "text-slate-800"
                } flex flex-col gap-2 font-light`}
              >
                <div>Step1: Email</div>
                <div className="flex items-center ">
                  <BsFillEnvelopeOpenFill className="mr-2 text-yellow-500" />
                  <p>Opened: 5th Feb</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InboxRightSidebar;
