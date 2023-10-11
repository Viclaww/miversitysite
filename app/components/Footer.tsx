import Link from "next/link";
import {FC} from "react";

export const Footer: FC = (): JSX.Element =>{
    return (
        <footer className="h-fit flex flex-col">
            <div className="flex flex-row justify-between items-center">
                <Link href={"/"}>Logo</Link>
                <div>
                    <h5 className="block text-xl">Follow us on</h5>
                    <div className="flex flex-row items-center">
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}