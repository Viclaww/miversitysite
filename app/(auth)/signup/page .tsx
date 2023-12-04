import Link from "next/link";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Image from "next/image";
export default function Signup() {
  const [visible, setVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setVisible((prev) => !prev);
  };
  return (
    <section>
      <div>
        <div className="signup-text">
          <h3>Get Started Now</h3>
          <p>Welcome, create an account to start your experience</p>
        </div>
        <form className="grid">
          <button>Continue with Apple</button>
          <button>Continue with Google</button>
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
    </section>
  );
}
