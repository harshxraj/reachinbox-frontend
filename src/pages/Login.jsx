import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { ThemeContext } from "../Context/ThemeContext";
import axios from "axios";

const Login = () => {
  const { theme } = useContext(ThemeContext);

  //   const handleLogin = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com"
  //       );
  //       console.log(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  return (
    <div
      className={`h-[92vh] ${
        theme === "light" ? "bg-white" : "bg-black"
      } flex justify-center items-center`}
    >
      <div
        className={`border ${
          theme === "light"
            ? "bg-purple-100 text-slate-800 border-black/30"
            : " bg-[#121213] border border-white/30  "
        } rounded-xl w-[430px] p-2 py-8 flex flex-col justify-center items-center`}
      >
        <h1 className="text-2xl text-center">Create a new Account</h1>

        <a
          className=""
          href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173"
        >
          <button
            className={`border ${
              theme === "light" ? "border-1 border-black" : ""
            } border-white/30 w-[360px] px-6 py-2 mt-8 m-auto flex justify-center gap-4 rounded-md`}
          >
            <FcGoogle size={24} />
            Sign Up with Google
          </button>
        </a>

        <button className="bg-[#1532c4] px-2 py-2 rounded-md text-white w-[230px] flex justify-center mt-6">
          Create an account
        </button>

        <p className="mt-4 font-light">Already have account? Sign in</p>
      </div>
    </div>
  );
};

export default Login;
