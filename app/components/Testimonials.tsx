import { FC } from "react";
import { Testimonial } from "./Testimony";
import Lady1 from "../images/Ellipse 1.png";
import Lady2 from "../images/Ellipse 2.png";
import Lady3 from "../images/Ellipse 3.png";
import Link from "next/link";
export const Testimonials: FC = (): JSX.Element =>{
    return(
        <section className="flex flex-col w-[90%] mx-auto my-20 items-center justify-evenly">
            <header className="w-full flex flex-row items-center justify-between">
                <h3 className="w-full text-5xl font-medium text-gray-900">
                    Testimonials
                </h3>
                <Link className="underline text-blue-600" href={"/testimonials"}>See more</Link>
            </header>
            <section className="flex flex-col md:flex-row justify-evenly mt-10 gap-5">
                <Testimonial
                image={Lady1}
                name={"Yusuf Aniefiok"}
                testimony={"I am thrilled to share my experience and gratitude for the incredible impact that this website has had on my educational journey. As a student in uniuyo , I can confidently say that this website’s contributions have been instrumental in shaping my academic success."}
                ></Testimonial>
                <Testimonial
                image={Lady2}
                name={"Mmenyene Edet"}
                testimony={"I firmly believe that this site is an invaluable asset to any educational sector. it’s contributions would undoubtedly enhance the quality and impact of an educational sector, making it an even more valuable resource for students seeking to expand their knowledge and achieve academic excellence."}
                ></Testimonial>   
                <Testimonial
                image={Lady3}
                name={"Laura Abasifreke"}
                testimony={"I firmly believe that this site is an invaluable asset to any educational sector. it’s contributions would undoubtedly enhance the quality and impact of an educational sector, making it an even more valuable resource for students seeking to expand their knowledge and achieve academic excellence."}
                ></Testimonial>
            </section>
        </section>
    )
}