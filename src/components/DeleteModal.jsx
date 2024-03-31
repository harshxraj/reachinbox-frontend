import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setSelectedThread, setThreads } from "../redux/threadSlice";
import { toast, Toaster } from "react-hot-toast";

const DeleteModal = ({ isOpen, onClose }) => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const selected_thread = useSelector((store) => store.threads.selectedThread);

  const handleDelete = async () => {
    console.log("fsd", selected_thread[0]?.threadId);
    try {
      var x = toast.loading("Thread deleting...");
      const response = await axios.delete(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selected_thread[0]?.threadId}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        }
      );
      const getUpdatedThreads = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        }
      );
      console.log("updatedThred", getUpdatedThreads?.data?.data);
      dispatch(setThreads(getUpdatedThreads?.data?.data));

      if (getUpdatedThreads?.data?.data?.length === 0) {
        dispatch(setSelectedThread([]));
      }

      if (getUpdatedThreads?.data?.data?.length > 0) {
        const firstMsg = await axios.get(
          `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${getUpdatedThreads?.data?.data[0]?.threadId}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            },
          }
        );
        dispatch(setSelectedThread(firstMsg?.data?.data));
      }

      onClose();
      // window.location.reload();

      console.log(response.data);
      // toast.success("Thread deleted!");
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
        <>
          <Toaster />
          <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
            <div className="fixed inset-0 transition-opacity bg-[#4b4c4d] opacity-50"></div>
            <motion.div
              className={`relative z-20 px-4 py-3 ${
                theme === "dark"
                  ? "bg-[#191a1d] text-white"
                  : "text-slate-800 bg-white"
              } rounded-lg w-[430px]`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, translateX: "0%", translateY: "0%" }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="mb-2 text-2xl text-center pt-3">Are you sure?</h1>
              <p className="text-slate-400 text-center mt-4 mb-10">
                Your selected email will be deleted
              </p>

              <div
                className={` ${
                  theme === "light" && "text-white"
                } flex justify-center gap-4 pb-4`}
              >
                <button
                  onClick={() => onClose()}
                  className="bg-[#1f1f1f] px-10 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-[#bb2626] px-10 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};

export default DeleteModal;
