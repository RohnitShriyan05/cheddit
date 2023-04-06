import { FC } from "react";
import { BsCameraVideo, BsCardImage, BsCardText } from "react-icons/bs";
import { CgPoll } from "react-icons/cg";
import Link from "next/link";
const Video: FC = () => {
    return (
        <div className="absolute inset-0 text-white flex items-center justify-center bg-CreatePostBg bg-cover bg-center">
            <div className="h-screen w-full text-white flex items-center justify-center">
                <div className="flex flex-col px-8 items-center justify-center bg-primaryDark py-4vh rounded-lg drop-shadow-2xl">
                    <h1 className="text-3xl pb-2vh">Create Post</h1>
                    <form className="">
                        <div className="grid grid-cols-4 place-items-center w-full text-lg py-1vh border-y border-neutral-500 mb-4vh">
                            <Link href="./Text" className="flex items-center w-max text-neutral-500"><BsCardText className="mr-1 text-xl" />TXT</Link>
                            <Link href="./Image" className="flex items-center w-max text-neutral-500"><BsCardImage className="mr-1 text-xl" />IMG</Link>
                            <Link href="./Video" className="flex items-center w-max text-white"><BsCameraVideo className="mr-1 text-xl" />VID</Link>
                            <Link href="./Poll" className="flex items-center w-max text-neutral-500"><CgPoll className="mr-1 text-xl" />POL</Link>
                        </div>
                        <div className="flex items-center flex-col w-full ">
                            <input
                                placeholder="Add an interesting title"
                                type="text"
                                className="bg-primaryDark w-full mx-3vw text-lg h-10 px-2 border border-neutral-500 rounded-md"
                            />
                        </div>
                        <input type="file" name="myImage" accept="video/mp4,video/x-m4v,video/*" className="w-full pt-3vh pb-3vh text-neutral-400"/>
                        <button className="bg-secondary w-full h-10">Create Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Video;