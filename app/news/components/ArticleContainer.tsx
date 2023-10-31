import { FC } from "react";
import { ArticlePreview } from "./Article";
import Link from "next/link";
interface ArticleContent{
    endpoint?: String,
    target?: String,
    children?: [],
    className?: String,
}


export const ArticleContainer: FC<ArticleContent> = ({endpoint, target, className}): JSX.Element =>{

    return(
        <>
            <section className={`w-full ${className}`}>
                <header className="w-full mt-3">
                    <h2 className="text-2xl ">
                    {target}
                    </h2>
                </header>
                <section className="mt-3">
                    <ArticlePreview
                    src={"https"}
                    topic={"Homing Pigeons get abandoned by lion"}
                    date={"today"}

                    >
                        
                    </ArticlePreview>
                    <ArticlePreview
                    src={"https"}
                    topic={"homing pigeon gets abandonded by lioness this time"}
                    date={"Today"}
                    >

                    </ArticlePreview>
                    <ArticlePreview
                     src={"https"}
                     topic={"homing pigeon gets abandonded by lioness this time"}
                     date={"Today"}
                    >

                    </ArticlePreview>
                    <footer className="text-right">
                        <Link href={"/articles"} className="text-sm font-medium underline text-blue-600">View more</Link>
                    </footer>
                </section>
            </section>
        </>
    )
}