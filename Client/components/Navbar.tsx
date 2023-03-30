import {GiCheeseWedge, GiPlagueDoctorProfile} from "react-icons/gi";
import {CgProfile} from "react-icons/cg";
import {BiSearchAlt} from "react-icons/bi";
import {BsToggleOff, BsFlag} from "react-icons/bs";
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from "react";
export const Navbar = ()=>{
    const [isOpen, setOpen] = useState(false)
    return(
        <nav className="w-full">
            <ul className="w-full flex items-center justify-center bg-primary lg:px-1vw px-2vw lg:text-xl text-lg py-2 text-white">
                <li className="flex items-center"><GiCheeseWedge className="text-secondary text-3xl"/><span className="sm:block hidden pl-1">Cheddit</span></li>
                <li className="flex-1 flex justify-center"><button className="w-max text-neutral-500 items-center flex px-10vw rounded-full border border-secondary"><BiSearchAlt/> Search</button></li>
                <li className="lg:block hidden"><GiPlagueDoctorProfile className="text-secondary bg-black rounded-full text-3xl"/></li>
                <li className="lg:hidden block w-max"><Hamburger toggled={isOpen} toggle={setOpen} size={20}/></li>
            </ul>
            <ul className={`${isOpen? "h-full opacity-100": "h-0 opacity-0"} transition-all duration-200  ease-in text-white flex flex-col float-right text-base w-40 bg-primary py-2 m px-1 mr-1`}>
                <li className="flex items-center pb-3"><CgProfile className="mr-1 text-xl"/>Profile</li>
                <li className="flex items-center pb-3"><BsToggleOff className="mr-1 text-xl"/> Dark Mode</li>
                <li className="flex items-center"><BsFlag className="mr-1 text-xl"/>Report</li>
            </ul>
        </nav>
    );
}