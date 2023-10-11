import { FC } from "react";

interface MentorProp{
    bg: String,
    mentor: String,
    despo: String,
}
export const Mentor: FC<MentorProp> = ({bg,mentor, despo}): JSX.Element =>{
    return (
        <section className={`rounded-xl w-1/3 h-[28rem] ${bg} flex flex-col justify-end`}>
            <div className="bg-[#90C9FF] w-full p-4 rounded-xl">
                <span className="block text-xl">{mentor}</span>
                <span className="text-sm">{despo}</span>
            </div>
        </section>
    )
}