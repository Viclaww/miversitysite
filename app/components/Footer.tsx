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
    <footer className="h-auto mb-0 flex flex-col px-4 pt-8 pb-5 w-full bg-blue-800 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link href={"/"}>
          <Image
            alt="logo"
            className="w-10 h-10 flex self-start"
            src={whiteLogo}
          />
        </Link>

        <div className="">Copyright &copy; Miversity all rights reversed</div>
        <div>
          <h5 className="block text-xl">Follow us on</h5>
          <div className="flex flex-row items-center justify-evenly">
            <Link
              href={"https://www.facebook.com/profile.php?id=61552847873203"}
            >
              {" "}
              <BiLogoFacebookSquare size={20} />
            </Link>
            <Link
              href={"https://instagram.com/miversity?igshid=YTQwZjQ0NmI0OA"}
            >
              <BiLogoTwitter size={20} />
            </Link>
            <Link href={"https://x.com/Miversity_org?s=09"}>
              <BiLogoInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
