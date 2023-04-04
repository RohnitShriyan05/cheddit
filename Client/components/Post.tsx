import { FC } from "react";
import { BiComment, BiDownvote, BiUpvote } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {FiShare} from "react-icons/fi";
export const Post: FC = () => {
    return (
        <div className="h-max w-full drop-shadow-2xl bg-primary lg:p-2 my-2 rounded-xl py-2">
            <div className="flex items-center text-sm w-full px-1">
                <p className="rounded-full bg-secondary w-max px-2">r/server</p>
                <p className="rounded-full bg-yellow-600 w-max px-2 ml-2 hidden">#help</p>
                <p className="rounded-full bg-green-700 w-max px-2 ml-2">#general</p>
                <div className="flex-1">
                    <p className="rounded-full bg-neutral-700 w-max px-2 ml-2 float-right">u/rohnitvs</p>
                </div>
            </div>
            <p className="text-xl py-2 px-2">This is the first post</p>
            <div>
                <img src="https://images.unsplash.com/photo-1680131487741-356b01b059ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
            </div>
            <div className="flex items-center px-1 pt-2 pb-1">
                <p className="flex items-center"><BiUpvote className="text-xl mr-1 hover:text-secondary"/>116</p>
                <BiDownvote className="ml-3 text-xl hover:text-blue-500"/>
                <BiComment className="text-xl ml-5"/>
                <p className="flex-1 flex items-center justify-end text-sm"><FiShare className="text-xl mr-1"/>Share</p>
            </div>
        </div>
    );
}