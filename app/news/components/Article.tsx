import { FC } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
interface ArticlePreview{
    src: Url,
    date: String,
    topic: String,
    children?: [],
}


export const ArticlePreview: FC<ArticlePreview> = ({src, date, topic,}): JSX.Element =>{
    return (
        <div className="flex flex-col text-left my-2 border-b-[1px] py-1">
            <h1 className="text-xl font-medium">{topic}</h1>
            <span className="flex flex-row justify-between">
                <span className="text-[#FFA800] font-normal text-sm">{date}</span>
                <Link href={src} className="text-blue-600 underline font-normal">
                    Read article&gt;
                </Link>
            </span>
        </div>
    )
}