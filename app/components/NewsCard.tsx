import { FC } from "react";
import Image, {StaticImageData} from "next/image";

interface NewsCardProps{
    title: string,
    image: StaticImageData,
    main: Boolean
}

export const NewsCard: FC<NewsCardProps> = ({title, image, main}): JSX.Element =>{
    return (
        <>
            {
                main ?
                <section>
                    <Image
                    src={image}
                    alt={title}
                    ></Image>
                    <h2 className="text-4xl font-semibold my-5">{title}</h2>
                    <button className="w-full bg-[#FFA800] h-fit py-4 rounded-md text-white text-xl">Read more</button>
                </section>
                :
                    <section className="w-full flex flex-col md:flex-row items-center p-5">
                        <div className="w-full md:w-auto h-auto">
                            <Image
                            src={image}
                            alt={title}
                            className="w-full md:w-auto"
                            >

                            </Image>
                        </div>
                        <div className="flex flex-col p-4 justify-start">
                            <h2 className="text-xl font-medium my-2">{title}</h2>
                            <button className="w-full bg-[#FFA800] h-fit py-2 rounded-md text-white text-xl">Read more</button>
                        </div>
                    </section>
            }
        </>
    )
}