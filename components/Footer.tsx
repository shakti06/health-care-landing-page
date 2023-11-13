import { FOOTER } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () =>{
    return(
        <footer className="flex flex-col bg-footer">
                <div className="flex flex-col padding-container max-container gap-14 w-full mt-6">
                    <div className="flex flex-col items-start justify-center lg:flex-row">
                        <Link href="/">
                            <Image src="/everest.jpg" alt="everst logo" width={150} height={150} />
                        </Link>
                        <h1 className="text-2xl lg:text-left mt-8 text-white px-6 ">
                            Everest Health Care
                        </h1>
                 

                    <div className="flex flex-wrap gap-10 sm:justify-between lg:flex-1 mb-14">
                        {FOOTER.map((column) => (
                            <FooterColumns  title={column.title}>
                                <ul className="regular-14 flex flex-col gap-4">
                                    {column.links.map((link) =>(
                                        <Link href="/" key={link} className="text-white hover:text-black">
                                        {link}
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumns>
                        ))}
                    </div>
                 </div>
                </div>
                <div className="text-center">
                    <p className="w-full text-white">Everest Health Care 2023 | All Rights Reserved</p>
                </div>
        </footer>
    )
}
type FooterColumnProps = {
    title : string;
    children : React.ReactNode
}

const FooterColumns =({title, children} : FooterColumnProps) =>{
    return(
        <div className="flex flex-col gap-5">
            <h4 className="font-bold text-xl text-white whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}

export default Footer;