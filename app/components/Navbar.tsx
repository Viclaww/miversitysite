"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import blueLogo from "../images/logoo-removebg.png";
import { usePathname } from "next/navigation";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
interface NavProps {
  className?: String;
}

export const NavBar: FC<NavProps> = (): JSX.Element => {
  const pathname = usePathname();
  const [dropDownVisible, setDropDownVisible] = useState(false);
  return (
    <>
      {dropDownVisible && (
        <section className="w-[100vw] h-[100vh] bg-[#1313139b] fixed z-[9999] ">
          <div className=" bg-white h-fit w-[90%] mx-auto rounded-xl mt-40 p-5">
            <div className="w-full flex flex-row justify-end text-right">
              <RxCross1
                size={30}
                onClick={() => setDropDownVisible(!dropDownVisible)}
              ></RxCross1>
            </div>
            <ul className="flex flex-col justify-start">
              <li className="py-5">
                <span
                  className={
                    pathname === "/"
                      ? "text-xl font-medium text-[#FFA800]"
                      : "text-gray-900 text-xl font-medium"
                  }
                >
                  <Link href={"/"}>Home</Link>
                </span>
              </li>
              <li className="py-5">
                <span
                  className={
                    pathname === "/news"
                      ? "text-xl font-medium text-[#FFA800]"
                      : " text-gray-900 text-xl font-medium"
                  }
                >
                  <Link href={"/news"}>News</Link>
                </span>
              </li>
              <li className="py-5">
                <span
                  className={
                    pathname === "/FAQs"
                      ? " text-lg font-medium text-[#FFA800]"
                      : " text-gray-900 text-lg font-medium"
                  }
                >
                  <Link href={"https://uniuyo-guide.vercel.app/"}>Map</Link>
                </span>
              </li>
              <li className="py-5">
                <span
                  className={
                    pathname === "/about"
                      ? "text-xl font-medium text-[#FFA800]"
                      : " text-gray-900 text-xl font-medium"
                  }
                >
                  <Link href={"/about"}>About Us</Link>
                </span>
              </li>
              <li className="py-5">
                <span className=" z-50">
                  <Link className="w-fit z-50 h-32 " href={"/request"}>
                    <button className="z-50 w-fit block h-fit bg-[#FFA800] cursor-pointer py-2 px-2  font-medium   text-white text-lg">
                      Request resource
                    </button>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </section>
      )}

      <header
        className={`font-inter w-[95%] mx-auto h-fit z-50  backdrop-blur-md bg-transparent`}
      >
        <nav className="flex flex-row md:flex-row-reverse mx-4 items-center justify-between md:justify-between font-mont h-20 font-medium">
          <span className="hidden md:flex md:flex-row md:items-center">
            <span
              className={
                pathname === "/"
                  ? "text-lg font-medium text-[#FFA800]"
                  : "text-gray-900 text-lg font-medium"
              }
            >
              <Link href={"/"}>Home</Link>
            </span>
            <span
              className={
                pathname === "/news"
                  ? "text-lg mx-4 font-medium text-[#FFA800]"
                  : "mx-4 text-gray-900 text-lg font-medium"
              }
            >
              <Link href={"/news"}>News</Link>
            </span>
            <span
              className={
                pathname === "/FAQs"
                  ? " mx-4 text-lg font-medium text-[#FFA800]"
                  : "mx-4 text-gray-900 text-lg font-medium"
              }
            >
              <Link href={"https://uniuyo-guide.vercel.app/"}>Map</Link>
            </span>
            <span
              className={
                pathname === "/about"
                  ? "mx-4 text-lg font-medium text-[#FFA800]"
                  : "mx-4 text-gray-900 text-lg font-medium"
              }
            >
              <Link href={"/about"}>About Us</Link>
            </span>
            <span className="mx-4 z-50">
              <Link className="w-fit z-50 h-32 " href={"/request"}>
                <button className="z-50 w-fit block h-fit bg-[#FFA800] cursor-pointer py-2 px-2 text-lg font-medium mx-4  text-white text-md">
                  Request resource
                </button>
              </Link>
            </span>
          </span>

          <span className="md:mx-0 mr-auto">
            <Link href={"/"}>
              <Image alt="logo" className="w-10 h-10" src={blueLogo} />
            </Link>
          </span>
          <button
            className="block md:hidden"
            onClick={() => setDropDownVisible(!dropDownVisible)}
          >
            <RxHamburgerMenu></RxHamburgerMenu>
          </button>
        </nav>
      </header>
    </>
  );
};
