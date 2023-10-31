import Image from "next/image";
import {FC} from "react";
import IkedaTribe from "../images/ikedatribe.png"

export const Partners: FC = (): JSX.Element =>{
    return(
        <>
        <section className="w-full mt-10 md:my-10 md:mt-20">
            <header>
                <h1 className="text-3xl md:text-5xl text-center text-gray-900 font-medium">
                    Our Partners
                </h1>
            </header>
            <section id="rowboat">
                <ul  className="moving-text">
                    <li className="w-40 h-40">
                        <Image
                        src={IkedaTribe}
                        alt="The Ikeda Tribe"
                        ></Image>
                    </li>
                    <li>A brand</li>
                    <li>A brand</li>
                    <li>A brand</li>
                    <li>A brand</li>
                </ul>
            </section>
        </section>
        </>
    )
}