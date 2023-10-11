import Link from "next/link";
import {FC} from "react";
import { BiLogoFacebookSquare, BiLogoTwitter, BiLogoInstagram} from "react-icons/bi";
export const Footer: FC = (): JSX.Element =>{
    return (
        <footer className="h-fit flex flex-col px-20 bg-blue-800 py-20 text-white">
            <div className="flex flex-row justify-between items-center">
                <Link href={"/"}>Logo</Link>
                <div>
                    <h5 className="block text-xl">Follow us on</h5>
                    <div className="flex flex-row items-center">
                        <BiLogoFacebookSquare></BiLogoFacebookSquare>
                        <BiLogoTwitter></BiLogoTwitter>
                        <BiLogoInstagram></BiLogoInstagram>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                Copyright c Miversity all rights reversed
            </div>
        </footer>
    )
}