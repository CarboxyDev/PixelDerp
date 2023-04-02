import React, { useState, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sleep } from "../utils/util";
import { toastError, toastSuccess } from "../utils/util";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitRef = useRef<HTMLButtonElement>(null);

  const login = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (submitRef.current) {
      submitRef.current.disabled = true;
    }

    if (!email || !password) {
      toastError("Please enter your email and password");
      await sleep(2000);
      if (submitRef.current) {
        submitRef.current.disabled = false;
      }
      return;
    }
  };

  return (
    <>
      <div className="min-w-[360px] rounded-2xl border border-gray-200 bg-white px-8 py-16 shadow-sm sm:min-w-[440px] sm:px-12 xl:min-w-[480px]">
        <div className="flex flex-col">
          <p className="font-medium text-gray-600">Email address</p>
          <input
            type="email"
            className="mt-3 h-10 rounded-lg border border-gray-300 px-2 text-gray-700 focus:outline-primary focus:invalid:outline-red-400"
            required
            autoComplete="on"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mt-8 flex flex-col">
          <p className="font-medium text-gray-600">Password</p>
          <input
            type="password"
            className="mt-3 h-10 rounded-lg border border-gray-300 px-2 text-gray-700 focus:outline-primary"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="mt-8 h-12 w-full">
          <button
            className="flex h-full w-full items-center justify-center rounded-lg bg-primary font-semibold text-white transition-colors delay-100 ease-in hover:bg-primary-600 disabled:cursor-not-allowed disabled:bg-opacity-50"
            onClick={(e) => login(e)}
            ref={submitRef}
          >
            Sign in
          </button>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default LoginForm;
