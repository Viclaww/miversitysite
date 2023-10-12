import Image, { StaticImageData } from "next/image";
import {FC} from "react";
import Line from "../images/Group 6.png";

interface TestimonialProps{
    image: StaticImageData,
    name: String,
    testimony: String,
}


export const Testimonial: FC<TestimonialProps> = ({image, name, testimony}): JSX.Element =>{
    return (
        <section className="bg-[#E5F2FF] rounded-xl p-5">
            <header className="flex flex-row items-center">
                <Image
                src={image}
                alt={"name"}
                >
                </Image>
                <h4 className="ml-4 text-xl font-semibold">
                    {name}
                </h4>
            </header>
            <article className="mt-8">
                <p className="text-lg font-medium">
                    {testimony}
                </p>
                <Image
                src={Line}
                alt="Line"
                className="relative bottom-0 mt-10"
                >

                </Image>
            </article>
        </section>
    )
}