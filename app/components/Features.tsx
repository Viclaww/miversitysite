import { FC } from "react";
import Image from "next/image";
import Icon1 from "../images/cuate.png";
import Icon2 from "../images/click-here.png";
import Icon3 from "../images/past-questions.png";
import Icon4 from "../images/paper-map.png";
import { Feature } from "./Feature";
export const Features: FC = (): JSX.Element => {
  return (
    <section className="w-[90%] mx-auto mt-10 mb-20 flex flex-col items-center justify-evenly">
      <header className="w-full md:w-[40%] sr-only md:not-sr-only">
        <h3 className="w-full text-3xl md:text-5xl my-10 text-center font-medium text-gray-900">
          Our Features
        </h3>
      </header>
      <section className="w-[60vh] mt-12 md:mt-0 grid grid-cols-1 md:w-[60%] md:grid  md:grid-cols-2 gap-32 justify-around items-center">
        <Feature
          iconImage={Icon2}
          header={"All your needed materials at the click of a button."}
          article={
            "Access to our vast library of past questions at the click of a button."
          }
        ></Feature>
        <Feature
          iconImage={Icon1}
          header={"Having issues getting organized info?"}
          article={
            "Our special news feature has been created just for you. Articles, latest updates on campus curated specially for you and your institution"
          }
        ></Feature>
        <Feature
          iconImage={Icon4}
          header={"Can't figure out where you're going?"}
          article={"Navigate your way around school easily with our map"}
        ></Feature>
        <Feature
          iconImage={Icon3}
          header={"Having troubles getting past questions?"}
          article={
            "We offer you past questions, solutions and simulated tests at your fingertips."
          }
        ></Feature>
      </section>
    </section>
  );
};
