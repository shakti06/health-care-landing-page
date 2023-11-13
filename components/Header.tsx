import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <nav className="padding-container flexBetween max-container relative z-30  py-5">
            <Link href="/">
                     <Image src="/everest.jpg" alt="health-care-image" width={70} height={50}/>
            </Link>

            <ul className="hidden lg:flex gap-12 justify-end">
                {NAV_LINKS.map((link) => (
                    <Link className="regular-18 font-bold flexCenter  hover:text-blue-700 transition-all cursor-pointer" href={link.href} key={link.key}>{link.label}</Link>
                ))}
            </ul>
        </nav>
    )
}
