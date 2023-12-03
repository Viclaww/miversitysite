"use client";
import Image from "next/image";
import Link from "next/link";
import Mask from "../../images/Mask group.png";

export default function signin() {
  return (
    <>
      <section className="w-[90vw] md:w-[80vw]   flex justify-between items-center mx-auto h-[70vh] p-10 rounded-xl my-16  bg-auth ">
        <div className="w-full md:w-3/5">
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
            <label className="text-sm my-1 text-[#0A3E5C]" htmlFor="">
              Password
            </label>
            <input className="auth-input" type="password" />

            <button></button>
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
