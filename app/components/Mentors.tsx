import {FC} from "react";
import Link from "next/link";
import { Mentor } from "./Mentor";
export const Mentors: FC = (): JSX.Element =>{
    return (
        <section className="flex flex-col w-[90%] mx-auto my-20 items-center justify-evenly">
            <header className="w-full flex flex-row items-center justify-between">
                <h3 className="w-full text-center md:text-left text-3xl md:text-5xl font-medium text-gray-900">
                    Experienced Tutors
                </h3>
              
            </header>
            <section className="w-full flex flex-col md:flex-row justify-evenly mt-20 gap-10">
               <Mentor mentor={"Dora Basil"} despo={"400 Level, Computer Engineering"} bg={"mentor1"}></Mentor>
               <Mentor mentor={"Godwin Edet"} despo={"300 Level, Mass Communication"} bg={"mentor2"}></Mentor>
               <Mentor mentor={"Amaka Joshua"} despo={"500 Level, Computer Engineering"} bg={"mentor3"}></Mentor>
            </section>
        </section>
    )
}