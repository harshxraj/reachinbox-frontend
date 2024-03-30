import "./App.css";
import { Routes, Route } from "react-router-dom";
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

function App() {
  const loading = useSelector((store) => store.threads.fetchingThreadsLoading);
  const fetchAllThreads = async () => {
    try {
      dispatch(setThreadsLoading(true));
      const response = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        }
      );
      console.log(response?.data?.data);
      dispatch(setThreads(response?.data?.data));

      const firstMsg = await axios.get(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${response?.data?.data[0].threadId}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        }
      );
      dispatch(setSelectedThread(firstMsg?.data?.data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setThreadsLoading(false));
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllThreads();
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/messages" element={<Inbox />} />
        <Route path="/messages/:thread_id" element={<Thread />} />
      </Routes>
    </Layout>
  );
}

export default App;
