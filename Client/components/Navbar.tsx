import {GiCheeseWedge, GiPlagueDoctorProfile} from "react-icons/gi";
import {BiSearchAlt} from "react-icons/bi";
export const Navbar = ()=>{
    return(
        <nav className="w-full">
            <ul className="w-full flex items-center justify-center bg-primary lg:px-1vw px-2vw lg:text-xl text-lg py-2 text-white">
                <li className="flex items-center"><GiCheeseWedge className="text-secondary text-3xl"/><span className="sm:block hidden pl-1">Cheddit</span></li>
                <li className="flex-1 flex justify-center"><button className="w-max text-neutral-500 items-center flex px-10vw rounded-full border border-secondary"><BiSearchAlt/> Search</button></li>
                <li><GiPlagueDoctorProfile className="text-secondary bg-black rounded-full text-3xl"/></li>
            </ul>
        </nav>
    );
}