import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { ThemeContext } from "../Context/ThemeContext";
import axios from "axios";

const Login = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`h-[100vh]  ${
        theme === "light" ? "" : "bg-black"
      } flex flex-col  items-center`}
    >
      <div
        className={`p-4 w-full bg-[#1f1f1f] ${
          theme == "light" && ""
        } text-white text-center flex items-center justify-center gap-2`}
      >
        <img src="./logo.svg" alt="" />
        <h1
          className={`text-2xl text-center font-medium ${
            theme == "dark" ? "" : ""
          }`}
        >
          REACHINBOX
        </h1>
      </div>

      <div className="flex items-center justify-center  h-[100vh]">
        <div
          className={`border border-white/30 bg-[#121213] rounded-xl w-[430px] p-2 py-8 flex flex-col justify-center items-center`}
        >
          <h1 className="text-2xl text-center">Create a new Account</h1>

          {/* <a
            className=""
            href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/home"
          > */}
          <a href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-frontend.vercel.app/home">
            <button
              className={`border ${
                theme === "light" ? "" : ""
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
    </div>
  );
};

export default Login;
