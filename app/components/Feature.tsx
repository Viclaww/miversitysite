import { FC } from "react";
import Image, { StaticImageData } from "next/image";
interface FeatureProps{
    iconImage: StaticImageData,
    header: String,
    article: String,
}

export const Feature: FC<FeatureProps> = ({iconImage, header, article}): JSX.Element =>{
    return (
        <div>
            <Image
                src={iconImage}
                alt="Icon"
                >
            </Image> 
            <h2 className="text-gray-900 font-semibold text-xl mt-3">
                {header}
            </h2>
            <p className="text-gray-900 font-normal text-lg mt-2">
                {article}
            </p>
        </div>
    )
}