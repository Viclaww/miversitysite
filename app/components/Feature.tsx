import { FC } from "react";
import Image, { StaticImageData } from "next/image";
interface FeatureProps {
  iconImage: StaticImageData;
  header: String;
  article: String;
}

export const Feature: FC<FeatureProps> = ({
  iconImage,
  header,
  article,
}): JSX.Element => {
  return (
    <article className=" border md:w-[360px] w-full md:flex-shrink-0  my-3 md:mx-5  border-[#EBEBEB] p-10 flex flex-col justify-center items-center rounded-2xl">
      <Image src={iconImage} alt="Icon" className="mx-auto md:mx-0"></Image>
      <h2 className="text-gray-900 font-semibold text-center md:text-left text-xl mt-3">
        {header}
      </h2>
      <p className="text-gray-900 font-normal  text-lg mt-2">{article}</p>
    </article>
  );
};
