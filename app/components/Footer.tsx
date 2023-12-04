import Link from "next/link";
import Image from "next/image";
import whiteLogo from "../images/Miversity_whiteonblack-removebg-preview (1).png";
import { FC } from "react";
import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";
export const Footer: FC = (): JSX.Element => {
  return (
    <footer className="h-fit flex flex-col px-4 pt-8 w-full lg:p-20 bg-blue-800 text-white">
      <div className="flex flex-row justify-between items-center">
        <Link href={"/"}>
          <Image alt="logo" className="w-10 h-10" src={whiteLogo} />
        </Link>
        <div>
          <h5 className="block text-xl">Follow us on</h5>
          <div className="flex flex-row items-center justify-evenly">
            <BiLogoFacebookSquare size={20}></BiLogoFacebookSquare>
            <BiLogoTwitter size={20}></BiLogoTwitter>
            <BiLogoInstagram size={20}></BiLogoInstagram>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center bottom-0 w-fit pt-4 mx-auto">
        Copyright c Miversity all rights reversed
      </div>
    </footer>
  );
};
