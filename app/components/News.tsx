import { FC } from "react";
import { NewsCard } from "./NewsCard";
import Ai from "../images/24f75db2-d837-4f6a-a1dd-cacac4bdea84 1.png";
import I2 from "../images/linkedin-sales-solutions-u3hmzw5U-SI-unsplash 1.png";
import I3 from "../images/pexels-oladimeji-ajegbile-2379886 1.png";
import I4 from "../images/pexels-lukas-rodriguez-3573351 1.png";
export const News: FC = (): JSX.Element =>{
    return (
        <section className="flex flex-col w-[90%] mx-auto my-20 items-center justify-evenly">
            <header className="w-full flex flex-row items-center justify-between">
                <h3 className="w-full text-center md:text-left text-3xl md:text-5xl font-medium text-gray-900">
                    News 
                </h3>
            
            </header>
            <section className="w-full flex flex-col md:flex-row justify-evenly mt-8 md:mt-20 gap-10">
                <div className="bg-[#E5F2FF] w-full md:w-1/2  min-h-[36rem] h-fit p-5">
                    <NewsCard main={true} title={"AI-Powered Tutoring Revolutionizes Homework Help for Students..."} image={Ai}
                    ></NewsCard>
                </div>
                <div className="bg-[#E5F2FF] flex flex-col w-full md:w-1/2">
                <NewsCard main={false} title={"AI-Powered Tutoring Revolutionizes Homework Help for Students..."} image={I2}
                ></NewsCard>
                <NewsCard main={false} title={"AI-Powered Tutoring Revolutionizes Homework Help for Students..."} image={I3}
                ></NewsCard>
                <NewsCard main={false} title={"AI-Powered Tutoring Revolutionizes Homework Help for Students..."} image={I4}
                ></NewsCard>
                <NewsCard main={false} title={"AI-Powered Tutoring Revolutionizes Homework Help for Students..."} image={I2}
                ></NewsCard>
                </div>
            </section>
        </section>
    )
}