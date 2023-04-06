import { FC, useState } from "react";
import { BsCameraVideo, BsCardImage, BsCardText } from "react-icons/bs";
import { CgPoll } from "react-icons/cg";
import {IoMdAddCircleOutline} from "react-icons/io";
const CreatePost: FC = () => {
    const [postType, setPostType] = useState("TXT");
    return (
        <div className="absolute inset-0 text-white flex items-center justify-center bg-CreatePostBg bg-cover bg-center">
            <div className="h-screen w-full text-white flex items-center justify-center">
                <div className="flex flex-col px-8 items-center justify-center bg-primaryDark py-4vh rounded-lg drop-shadow-2xl">
                    <h1 className="text-3xl pb-2vh">Create Post</h1>
                    <form className="">
                        <div className="grid grid-cols-4 place-items-center w-full text-lg py-1vh border-y border-neutral-500 mb-4vh">
                            <button className={`flex items-center w-max ${postType == "TXT" ? "text-white" : "text-neutral-500"}`} onClick={(e) => { setPostType("TXT"); e.preventDefault(); }}><BsCardText className="mr-1 text-xl" />TXT</button>
                            <button className={`flex items-center w-max ${postType == "IMG" ? "text-white" : "text-neutral-500"}`} onClick={(e) => { setPostType("IMG"); e.preventDefault(); }}><BsCardImage className="mr-1 text-xl" />IMG</button>
                            <button className={`flex items-center w-max ${postType == "VID" ? "text-white" : "text-neutral-500"}`} onClick={(e) => { setPostType("VID"); e.preventDefault(); }}><BsCameraVideo className="mr-1 text-xl" />VID</button>
                            <button className={`flex items-center w-max ${postType == "POL" ? "text-white" : "text-neutral-500"}`} onClick={(e) => { setPostType("POL"); e.preventDefault(); }}><CgPoll className="mr-1 text-xl" />POL</button>
                        </div>
                        <div className="flex items-center flex-col w-full ">
                            <input
                                placeholder="Add an interesting title"
                                type="text"
                                name="USERNAME"
                                className="bg-primaryDark w-full mx-3vw text-lg h-10 px-2 border border-neutral-500 rounded-md"
                            />
                        </div>
                        <div className={`flex items-center flex-col w-full pt-3vh pb-2vh ${postType != "TXT" ? "hidden" : "block"}`}>
                            <textarea
                                placeholder="Add your text..."
                                name="PASSWORD"
                                className="bg-primaryDark w-full mx-3vw text-lg h-60 p-2 border border-neutral-500 rounded-md"
                            />
                        </div>
                        <div className={`flex items-center flex-col w-full pt-3vh pb-3vh ${postType != "IMG" ? "hidden" : "block"}`}>
                            <input type="file" name="myImage" accept="image/*" className="px-2" />
                        </div>
                        <div className={`flex items-center flex-col w-full pt-3vh pb-3vh ${postType != "VID" ? "hidden" : "block"}`}>
                            <input type="file" name="myImage" accept="video/mp4,video/x-m4v,video/*" className="px-2" />
                        </div>
                        <div className={`flex items-center w-full mt-2vh mb-3vh px-2 border border-neutral-500 rounded-md ${postType != "POL" ? "hidden" : "block"}`}>
                            <input
                                placeholder="Add Options"
                                type="text"
                                name="Option"
                                className="flex-1 bg-primaryDark mr-1vw text-lg h-10"
                            ></input>
                            <IoMdAddCircleOutline className="text-2xl"/>
                        </div>
                        <button className="bg-secondary w-full h-10">Create Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;