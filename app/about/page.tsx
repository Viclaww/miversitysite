import type React from "react"
import { NavBar } from "../components/Navbar";
import Image from "next/image";
import Contact from "./images/contact us.png";
import { BiLogoFacebookSquare, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { Footer } from "../components/Footer";
export default function Layout() {
    return (
      <>
      <NavBar></NavBar>
      <section className="w-[95%] mx-auto">
        <header>
          <h1 className="w-[95%] text-[4.5rem]">
            Let's connect and <br></br>
            <span className="text-[#FFA800] text-[6rem] -mt-4 leading-4 font-semibold">Collaborate</span>
          </h1>
        </header>
        <article>
          <p className="font-normal text-2xl">
            Now that you know how to reach us and what you can contact us for, 
            We are looking forward to hearing from you.
            <br></br> 
            <br></br>
            Building meaningful connections and engaging in productive conversations is what makes the digital world so exciting, 
            and we are excited to be a part of that journey. Thank you for considering getting in touch. 
            <br></br>
            <br></br>
            Together, we can explore new horizons, create valuable content, and make the most of the opportunities that come our way. 
            Feel free to use the contact information provided above, and let's start a conversation that could lead to great things!</p>
        </article>
        <figure className="mt-10 mb-10">
          <Image
          alt="Smiling lady"
          className="mx-auto"
          src={Contact}
          ></Image>
        </figure>
        <section className="bg-[#002B43] p-16 w-full">
          <span className="block mx-auto w-fit font-normal text-3xl text-white">
            Send us a message
            <span className="block text-xl mx-auto w-fit">hr@miversity.com</span>
          </span>
          <span className="block mx-auto w-fit font-normal text-3xl text-white mt-6">
            Keep in touch
            <span className="block text-xl mx-auto w-fit mt-4">follow us on</span>
            <span>
            <div className="flex flex-row items-center justify-evenly w-fit mx-auto mt-6">
              <BiLogoFacebookSquare color={"white"} size={40}></BiLogoFacebookSquare>
              <BiLogoTwitter color={"white"}  size={40}></BiLogoTwitter>
              <BiLogoInstagram color={"white"}  size={40}></BiLogoInstagram>
            </div>
            </span>
          </span>
        </section>
      </section>
      <Footer
      className={"mt-10"}
      >

      </Footer>
      </>
    )
}