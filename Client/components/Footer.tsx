import { BiHomeAlt2, BiPlus, BiBell } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
export const Footer = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <nav className="w-full fixed bottom-0 z-40">
            <ul className="xl:max-h-16 lg:max-h-14 max-h-12 h-max w-full bg-primary flex items-center justify-center lg:px-1vw px-2vw text-3xl py-2 text-white">
                <li>
                    <Link href={"/"} className="flex items-center"><BiHomeAlt2 /></Link>
                </li>
                <li className="mx-5vw">
                    <Link href={"/Profile"}><BiPlus /></Link>
                </li>
                <li>
                    <Link href={"/Profile"}><BiBell /></Link>
                </li>
            </ul>
        </nav>
    );
}