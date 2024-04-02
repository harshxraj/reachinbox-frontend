import React, { useContext, useEffect, useRef } from "react";
import { IoMdRefresh } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { ThemeContext } from "../Context/ThemeContext";
import ThreadCard from "./ThreadCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedThread, setThreadsLoading } from "../redux/threadSlice";
import axios from "axios";

const data = {
  status: 200,
  data: [
    {
      id: 3,
      fromName: "Shaw Adley",
      fromEmail: "shaw@getmemeetings.com",
      toName: "",
      toEmail: "mitrajit2022@gmail.com",
      cc: null,
      bcc: null,
      threadId: 1,
      messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      subject:
        "Shaw - following up on our meeting last week... | 7ZG2ZTV 6KG634E",
      body: "<p>Hi Mitrajit,</p><p>Just wondering if you&rsquo;re still interested.</p><p>Regards,<br/>Shaw Adley</p><p>6KG634E practicecowboy</p>",
      isRead: true,
      folder: "INBOX",
      uid: 594,
      sentAt: "2023-11-23T04:08:45.000Z",
      archivedAt: null,
      createdAt: "2023-11-23T07:38:46.000Z",
      updatedAt: "2023-11-23T07:38:46.000Z",
      deletedAt: null,
    },
    {
      id: 4,
      fromName: "Shaw Adley",
      fromEmail: "shaw@getmemeetings.com",
      toName: "",
      toEmail: "mitrajit2022@gmail.com",
      cc: null,
      bcc: null,
      threadId: 2,
      messageId: "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
      inReplyTo: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      references: "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
      subject: "Test mail",
      body: "<p>Test mail</p>",
      isRead: true,
      folder: "INBOX",
      uid: 594,
      sentAt: "2023-11-23T04:08:45.000Z",
      archivedAt: null,
      createdAt: "2023-11-23T07:38:46.000Z",
      updatedAt: "2023-11-23T07:38:46.000Z",
      deletedAt: null,
    },
  ],
};

const InboxSidebar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const replyButtonRef = useRef(null);

  const str = useSelector((store) => store.threads);
  console.log(str);
  const threads = useSelector((store) => store.threads.threads);
  const loading = useSelector((store) => store.threads.fetchingThreadsLoading);
  const dispatch = useDispatch();

  const onClick = async (threadId) => {
    try {
      dispatch(setThreadsLoading(true));
      const response = await axios.get(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        }
      );
      console.log("res", response.data.data);
      dispatch(setSelectedThread(response.data.data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setThreadsLoading(false));
    }
  };

  return (
    <div
      className={`w-[320px] border-r-2 min-h-[100vh] ${
        theme == "dark" ? "border-white/30" : "border-black/30"
      } py-4 px-6`}
    >
      {/* 278 */}
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sky-600 text-2xl font-medium">All Inbox(s)</h1>
            <IoIosArrowDown className="text-sky-600" />
          </div>

          <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>
            25/25 <span className="text-slate-500">Inbox selected</span>
          </p>
        </div>

        <div className="bg-[#1f1f1f] text-white py-2 h-9 px-2 rounded-md">
          <IoMdRefresh size={22} />
        </div>
      </div>

      {/* Search box */}
      <div className="relative bg-[#1f1f1f] mt-5 rounded-md">
        <input
          type="text"
          placeholder="Search"
          className={`pl-8 w-full py-1 rounded-md  focus:border-blue-500 focus:outline-none ${
            theme === "dark"
              ? "bg-[#1f1f1f]"
              : "bg-white border-black/50 border  text-black"
          } text-white`}
        />
        <CiSearch className="absolute inset-y-0 right-0 m-2 left-0 text-gray-500" />
      </div>

      <div
        className={`${
          theme == "dark" ? "text-white" : "text-black"
        } flex justify-between text-white mt-3 items-center`}
      >
        <div
          className={`size-8 text ${
            theme == "dark" ? "text-sky-600" : "text-white"
          } bg-[#1f1f1f] rounded-xl flex items-center justify-center`}
        >
          26
        </div>
        <div
          className={`pr-10 ${theme == "dark" ? "text-white" : "text-black"}`}
        >
          <h1>New Replies</h1>
        </div>
        <div
          className={`flex items-center gap-2  ${
            theme == "dark" ? "text-white" : "text-black"
          }`}
        >
          <h1>Newest</h1>
          <IoIosArrowDown />
        </div>
      </div>

      <hr
        className={`mt-3 ${
          theme === "dark" ? "border-white/30" : "border-black/30"
        }   border-t-2`}
      />

      {/* Thread */}
      <div
        className={`${
          theme == "dark" ? "text-white" : "text-black"
        } flex flex-col `}
      >
        {loading ? (
          <>
            <div className="flex flex-col gap-4 rounded-sm pt-2 ">
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-24 w-full`}
              ></div>
              <div
                className={`${
                  theme == "dark" ? "skeleton-dark" : "skeleton-light"
                } h-24 w-full`}
              ></div>
            </div>
          </>
        ) : (
          <>
            {threads?.map((thread) => (
              <div
                key={thread.id}
                className={`border-b-2 ${
                  theme === "dark" ? "border-white/50" : "border-black/50"
                }`}
              >
                <ThreadCard
                  {...thread}
                  onClick={() => onClick(thread.threadId)}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default InboxSidebar;
