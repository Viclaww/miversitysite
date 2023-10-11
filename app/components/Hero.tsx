import {FC} from "react";
import Image from "next/image";
import Tree from "../images/Book Tree  1.png"
export const Hero: FC = (): JSX.Element =>{
    return(
        <section className="w-[90%] overflow-clip mx-auto p-8 mt-6 border-gray-900 border-[1px] h-fit flex flex-col md:flex-row md:items-center md:justify-around rounded-lg"> 
             <div className="bg-[#00E0FF] rounded-full relative -z-50 -top-20 -left-10 h-[20rem] w-[12rem]  blur-[50px]">

            </div>
            <section className="w-1/2 relative -left-40">
               
                <header>
                    <h1 className="text-gray-900 text-7xl font-medium">
                        Path to 
                        <span className="text-[#FFA800] text-[5rem] font-bold block">Success</span>
                    </h1>
                </header>
                <article className="mt-4">
                    <p className="text-xl">
                    Ignite your mind with knowledge. Soar to new heights with understanding. Illuminate your path with wisdom. At (name of your website), we guide you on a journey of learning and discovery
                    </p>
                </article>
                <div className="flex flex-row mt-4">
                    <button  className="w-fit block h-fit bg-blue-600 cursor-pointer py-2 px-4 rounded-md text-lg font-medium mr-4  text-white text-md">
                        Request Resource
                    </button>
                    <button className="w-fit block h-fit bg-white border-[1px] border-blue-600 cursor-pointer py-2 px-4 rounded-md text-lg font-medium mx-4  text-blue-600 text-md">
                        Contact Us
                    </button>
                </div>
            </section>
            <figure className="w-2/5">
                <Image
                src={Tree}
                alt="Book Tree"
                priority
                className="w-full"
                >

                </Image>
                <div className="bg-[#00E0FF] rounded-full relative -z-50 left-36  h-[4rem] w-[12rem]  blur-[50px]">

                </div>
            </figure>
        </section>
    )
}