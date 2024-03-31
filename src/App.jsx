import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Inbox from "./pages/Inbox";
import Thread from "./pages/Thread";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setSelectedThread,
  setThreads,
  setThreadsLoading,
} from "./redux/threadSlice";
import Login from "./pages/Login";
import { FaInbox } from "react-icons/fa";

function App() {
  const loading = useSelector((store) => store.threads.fetchingThreadsLoading);
  // const fetchAllThreads = async () => {
  //   try {
  //     dispatch(setThreadsLoading(true));
  //     const response = await axios.get(
  //       "https://hiring.reachinbox.xyz/api/v1/onebox/list",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  //         },
  //       }
  //     );
  //     console.log(response?.data?.data);
  //     dispatch(setThreads(response?.data?.data));

  //     const firstMsg = await axios.get(
  //       `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${response?.data?.data[0].threadId}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
  //         },
  //       }
  //     );
  //     dispatch(setSelectedThread(firstMsg?.data?.data));
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     dispatch(setThreadsLoading(false));
  //   }
  // };
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchAllThreads();
  // }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/messages"
        element={
          <Layout>
            <Inbox />
          </Layout>
        }
      />
      <Route
        path="/messages/:thread_id"
        element={
          <Layout>
            <Thread />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <div className="relative h-screen">
              <div className="flex border-l-4 h-[432px] ml-20 border-white justify-center items-center gap-3"></div>
              <div className="absolute top-[428px] left-8 flex flex-col items-center">
                <h1 className="text-white absolute -top-14 left-1">Go here</h1>
                <div className="absolute top-1/2 left-0 w-12 h-[4px] bg-white"></div>
                <div className="absolute -top-1 -left-1 w-0 h-0 border-t-4 border-r-4 border-b-4 border-white transform rotate-45"></div>
                <div className="absolute top-0 -left-1 w-0 h-0 border-t-4 border-r-4 border-b-4 border-white transform -rotate-45"></div>
              </div>
            </div>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
