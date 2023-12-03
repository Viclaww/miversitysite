"use client";
import Image from "next/image";
import Link from "next/link";
import Mask from "../../images/Mask group.png";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
export default function Signin() {
  const [visible, setVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      <section className="w-[90vw] md:w-[80vw]   flex justify-between items-center mx-auto h-[70vh] p-10 rounded-xl my-16  bg-auth ">
        <div className="w-full ">
          <div className="login-text">
            <h3 className="text-3xl my-2">Log Into Your Account</h3>
            <p className="text-lg">
              Welcome, Log In for personalized experience
            </p>
          </div>
          <form className="flex flex-col w-full my-8 p-0 md:p-3">
            <label className="text-sm my-1 text-[#0A3E5C]" htmlFor="">
              Registration Number
            </label>
            <input className=" auth-input" type="text" />
            <div className="flex flex-1 relative flex-col">
              <label className="text-sm my-1 text-[#0A3E5C]" htmlFor="">
                Password
              </label>
              <span className="absolute right-2 md:right-24 cursor-pointer top-9">
                {!visible ? (
                  <IoMdEye onClick={togglePasswordVisibility} size={28} />
                ) : (
                  <IoMdEyeOff onClick={togglePasswordVisibility} size={28} />
                )}
              </span>
              <input
                id="password"
                className="auth-input"
                type={visible ? "text" : "password"}
              />
            </div>

            <button className="bg-[#FFA800] py-2 rounded-lg md:w-4/5 hover:bg-[#EEA000]">
              Sign In
            </button>
            <p>
              Don’t have an account?{" "}
              <Link href={"/"} className="text-[#2894F8]">
                Sign up
              </Link>{" "}
            </p>
          </form>
        </div>
        <Image alt="" className="hidden md:block" src={Mask} />
      </section>
    </>
  );
}
