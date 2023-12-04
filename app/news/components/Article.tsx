import { FC } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
interface ArticlePreview{
    src: Url,
    date: String,
    topic: String,
}


export const ArticlePreview: FC<ArticlePreview> = ({src, date, topic}) =>{
    return (
        <div className="flex flex-col">
            <h1>{topic}</h1>
            <span className="flex flex-row justify-between">
                <span>{date}</span>
                <Link href={src}></Link>
            </span>
        </div>
    )
}