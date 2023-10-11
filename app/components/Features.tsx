import { FC } from "react";
import Image from "next/image";
import Icon1 from "../images/Group 22.png";
import Icon2 from "../images/Group 23.png";
import Icon3 from "../images/Group 24.png";
import Icon4 from "../images/Group 25.png";
import { Feature } from "./Feature";
export const Features: FC = (): JSX.Element =>{
    return(
       <section className="w-[90%] mx-auto my-20 flex flex-col md:flex-row items-center justify-evenly">
            <header className="w-full md:w-[40%]">
                <h3 className="w-full text-5xl text-center font-medium text-gray-900">
                    Our Features
                </h3>
                <span>

                </span>
            </header>
            <section className="w-full flex flex-col md:w-[60%] md:grid  md:grid-cols-2 gap-8">
                <Feature 
                iconImage={Icon2}
                header={"Expert Instruction"}
                article={"Quality education begins with quality instruction. At MyUni, we pride ourselves on offering expert instruction that propels our students towards excellence."}
                ></Feature>
                <Feature 
                iconImage={Icon3}
                header={"Timely Information"}
                article={"The educational landscape is constantly evolving. We are committed to keeping our courses up-to-date with the latest information and trends."}
                ></Feature>  
                <Feature 
                iconImage={Icon1}
                header={"Detailed Resources"}
                article={"The educational landscape is constantly evolving. We are committed to keeping our courses up-to-date with the latest information and trends."}
                ></Feature>  
                <Feature 
                iconImage={Icon4}
                header={"Campus Navigation"}
                article={"We understand that ease of navigation is essential. Our concise map aspect ensures that you can move between sections of the school infrasctructure seamlessly."}
                ></Feature>
            </section>
       </section>
    )
}