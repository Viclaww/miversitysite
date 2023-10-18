"use client"

import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx"
interface NavProps {
    className?: String
}

export const NavBar: FC<NavProps> = (): JSX.Element =>{
    const pathname = usePathname();
    return (
        <header className={`font-inter w-[95%] mx-auto h-fit z-50  backdrop-blur-md bg-transparent`}>
            <nav className='flex flex-row md:flex-row-reverse mx-4 items-center justify-between md:justify-between font-mont h-20 font-medium'>
                <span className='hidden md:flex md:flex-row md:items-center'>
                    <span className={ pathname === "/" ? 'text-lg font-medium text-[#FFA800]' : "text-gray-900 text-lg font-medium"}>
                        <Link href={"/"}>
                        Home
                        </Link>
                    </span>
                    <span  className={ pathname === "/about" ? 'text-gray-900 mx-4' : "mx-4 text-gray-900 text-lg font-medium"} >
                    <Link href={"/community"}>
                        News
                    </Link>
                    </span>
                    <span className={ pathname === "/FAQs" ? 'text-gray-900 mx-4' : "mx-4 text-gray-900 text-lg font-medium"}>
                    <Link href={"https://uniuyo-guide.vercel.app/"}>
                       Map
                    </Link>
                    </span> 
                    <span className={ pathname === "/dispatchers" ? 'text-gray-900 mx-4' : "mx-4 text-gray-900 text-lg font-medium"}>
                    <Link href={"/about"}>
                       About Us
                    </Link>
                    </span>
                    <span className='mx-4 z-50'>
                    <Link className='w-fit z-50 h-32 ' href={"/auth/signup/"}>
                        <button className='z-50 w-fit block h-fit bg-[#FFA800] cursor-pointer py-2 px-2 text-lg font-medium mx-4  text-white text-md'>
                           Request resource
                        </button>
                    </Link>
                    </span>
                </span>
               
                <span className='md:mx-0 mr-auto'>
                    <Link href={"#"}>
                    Logo
                    </Link>
                </span>
                <span className="block md:hidden">
                    <RxHamburgerMenu></RxHamburgerMenu>    
                </span>  
        </nav>
    </header>
    )
}