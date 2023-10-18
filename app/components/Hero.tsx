import {FC} from "react";
import Image from "next/image";
import Tree from "../images/Book Tree  1.png"
export const Hero: FC = (): JSX.Element =>{
    return(
        <section className="w-[90%] overflow-clip mx-auto p-4 md:p-8 mt-6 border-gray-400 border-[1px] h-fit flex flex-row items-center md:justify-around rounded-lg"> 
             <div className="bg-[#00E0FF] hidden md:block rounded-full relative -z-50 -top-20 -left-10 h-[20rem] w-[12rem]  blur-[50px]">

            </div>
            <section className="w-full mt-0 md:w-1/2 md:relative md:-left-40">
                <header>
                    <h1 className="text-gray-900 text-left text-2xl  md:text-7xl font-medium">
                        Path to 
                        <span className="text-[#FFA800] text-2xl md:mt-10 mt-0 md:text-[5rem] font-bold block">Success</span>
                    </h1>
                </header>
                <article className="mt-1 md:mt-4">
                    <p className="text-[0.6rem] md:text-xl text-left">
                    Ignite your mind with knowledge. Soar to new heights with understanding. Illuminate your path with wisdom. At (name of your website), we guide you on a journey of learning and discovery
                    </p>
                </article>
                <div className="hidden md:flex items-center  md:flex-row mt-4">
                    <button  className="w-fit block h-fit bg-blue-600 cursor-pointer py-2 px-4 rounded-md text-sm md:text-lg font-medium mr-4  text-white text-md">
                        Request Resource
                    </button>
                    <button className="w-fit mt-5 md:mt-0 block h-fit bg-white border-[1px] border-blue-600 cursor-pointer py-2 px-4 rounded-md text-sm md:text-lg font-medium mx-4  text-blue-600 text-md">
                        Contact Us
                    </button>
                </div>
            </section>
            <figure className="w-full md:w-2/5">
                <Image
                src={Tree}
                alt="Book Tree"
                priority
                className="w-full"
                >

                </Image>
                <div className="bg-[#00E0FF] hidden md:block rounded-full relative -z-50 left-36  h-[4rem] w-[12rem]  blur-[50px]">

                </div>
            </figure>
        </section>
    )
}