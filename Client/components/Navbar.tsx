import { GiCheeseWedge, GiPlagueDoctorProfile } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import { BsFlag, BsBookmarks } from "react-icons/bs";
import { Fade as Hamburger } from 'hamburger-react';
import { useState, FC } from "react";
import Link from "next/link";
export const Navbar : FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [isSearch, setSearch] = useState(false);
    return (
        <nav className="w-full fixed top-0 z-40">
            <ul className="xl:max-h-16 lg:max-h-14 max-h-12 h-max w-full bg-primary flex items-center justify-center lg:px-1vw px-2vw lg:text-xl text-lg py-2 text-white">
                <li>
                    <Link href={"/"} className="flex items-center w-full"><GiCheeseWedge className="text-secondary text-3xl" /><span className="sm:block hidden pl-1">Cheddit</span></Link>
                </li>
                <li className="flex-1"></li>
                <li className={`absolute left-1/2 lg:w-1/3 md:w-1/2 transform -translate-x-1/2 flex justify-center items-center bg-primary px-3 text-neutral-500 rounded-full border ${isSearch ? "border-secondary":"border-neutral-500"}`}>
                    <input className="flex-1 bg-primary px-2" onFocus={()=>setSearch(true)} onBlur={()=>setSearch(false)}/>
                    <BiSearchAlt className="text-white"/>
                </li>
                <li className="lg:block hidden">
                    <Link href={"/Profile"}><GiPlagueDoctorProfile className="text-secondary bg-black rounded-full text-3xl" /></Link>
                </li>
                <li className="lg:hidden block w-max">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
                </li>
            </ul>
            <ul className={`${isOpen ? " bg-primary h-full opacity-100 py-2 m px-2 mr-1" : "h-0 opacity-0"} transition-all duration-200  ease-in text-white flex flex-col float-right text-base w-40 `}>
                <li onClick={()=>setOpen(!isOpen)}>
                    <Link href={"/Profile"} className="flex items-center pb-3">
                        <CgProfile className="mr-1 text-xl" />Profile
                    </Link>
                </li>
                <li onClick={()=>setOpen(!isOpen)} className="flex items-center pb-3">
                    <BsBookmarks className="mr-1 text-xl" /> Saved
                </li>
                <li onClick={()=>setOpen(!isOpen)} className="flex items-center">
                    <BsFlag className="mr-1 text-xl" />
                    Report
                </li>
            </ul>
        </nav>
    );
}