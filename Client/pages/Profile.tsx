import { Post } from "@/components/Post";
import {FC} from "react";
import { BsChevronDoubleDown, BsPerson, BsSun } from "react-icons/bs";

const Profile: FC = ()=>{
    return(
        <div className="text-white h-max w-full bg-primaryDark flex flex-col items-center justify-center py-10vh overflow-scroll">
            <BsPerson className="text-5xl"/>
            <p className="text-2xl font-bold">u/rohnitshriyan</p>
            <p className="text-sm py-2">146 Karma | 3yrs on Cheddit</p>
            <div className="flex-1 lg:w-1/4 w-full lg:px-0 px-5vw">
                <div className="w-full flex items-center py-2">
                    <BsSun className="mr-1"/> Sort <BsChevronDoubleDown className="ml-2 text-xs"/>
                </div>
                <div className="w-full h-full">
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    );
}

export default Profile;