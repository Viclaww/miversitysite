"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { NavBar } from "../components/Navbar";

import { Footer } from "../components/Footer";
import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import contact from "../images/Mask group (1).png";

export default function Page() {
  return (
    <>
      <ProgressBar
        height="4px"
        color="blue"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <NavBar />
      <section className="w-[90vw] text-[#002B43] md:w-[70vw] mx-auto flex flex-col-reverse md:flex-col my-5">
        <div className="text">
          <h3 className="text-2xl md:text-4xl my-1 pb-5 font-bold">
            Let's Connect and <br />
            <span className="text-5xl md:text-7xl">Collaborate</span>
          </h3>
          <p className="text-md md:text-lg leading-6 font-medium">
            Now that you know how to reach us and what you can contact us for,
            We are looking forward to hearing from you. Building meaningful
            connections and engaging in productive conversations is what makes
            the digital world so exciting, and we are excited to be a part of
            that journey. <br /> Thank you for considering getting in touch.
            Together, we can explore new horizons, create valuable content, and
            make the most of the opportunities that come our way. Feel free to
            use the contact information provided above, and let's start a
            conversation that could lead to great things!
          </p>
        </div>
        <Image src={contact} className="my-5" alt="" />
      </section>
      <section className="keep-in-touch w-[80vw] p-5 my-5 text-white flex flex-col justify-center items-center mx-auto bg-[#002B43] ">
        {/* <p className="text-3xl font-semibold py-2">You can Mail Us</p>
        <p>hr@umobile.com</p> */}
        <p className="text-3xl font-semibold py-2">Keep In Touch</p>
        <div>
          <h5 className="block text-xl">Follow us on</h5>
          <div className="flex flex-row items-center justify-evenly">
            <Link
              href={"https://www.facebook.com/profile.php?id=61552847873203"}
            >
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
      </section>
      <Footer />
    </>
  );
}
