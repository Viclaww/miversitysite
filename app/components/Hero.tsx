import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Tree from "../images/Book Tree  1.png";
export const Hero: FC = (): JSX.Element => {
  return (
    <section className="h-[90vh] justify-center bg-center hero flex flex-col p-10 md:p-24">
      <div className="md:w-1/2 flex flex-col">
        <h3 className="md:text-7xl text-5xl  font-bold text-white">
          Pave a Path to
          <span className="text-[#FFA800]">
            <br /> Success
          </span>
        </h3>
        <p className="text-lg  my-8 font-medium text-white">
          With Miversity,get access to your university on the go, at the comfort
          of your smartphone
        </p>
      </div>
      <div className="flex md:w-1/3 text-sm mt-3 md:ml-3 justify-between">
        <button className="bg-[#2894F8] hover:shadow-[1px_5px_16px_0_#2894f8] duration-200 ease py-2 px-3 rounded-lg font-medium text-white ">
          <Link href="/">Request Resource</Link>
        </button>
        <button className="border-2 hover:bg-[#FFA800] duration-200 ease text-[#ffa800] hover:shadow-[1px_5px_10px_0_#ffa800]  border-[#FFA800] py-2 px-3 rounded-lg font-medium hover:text-white ">
          <Link href="/">Advertise with Us </Link>
        </button>
      </div>
    </section>
  );
};
