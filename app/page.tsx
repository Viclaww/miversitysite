"use client";
import Image from "next/image";
import React from "react";
import { NavBar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Mentors } from "./components/Mentors";
import { News } from "./components/News";
import { Footer } from "./components/Footer";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
export default function Home() {
  return (
    <>
      <ProgressBar
        height="4px"
        color="blue"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <NavBar></NavBar>
      <Hero></Hero>
      <Features></Features>
      <Testimonials></Testimonials>
      <Mentors></Mentors>
      <News></News>
      <Partners></Partners>
      <Footer></Footer>
    </>
  );
}
