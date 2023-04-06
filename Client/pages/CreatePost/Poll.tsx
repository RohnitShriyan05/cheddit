    import { FC, useState } from "react";
    import Link from "next/link";
    import { BsCameraVideo, BsCardImage, BsCardText } from "react-icons/bs";
    import { CgPoll } from "react-icons/cg";
    import { IoMdAddCircleOutline } from "react-icons/io";
    const Poll: FC = () => {
        const [options, setOptions] = useState(2);
        return (
            <div className="absolute inset-0 text-white flex items-center justify-center bg-CreatePostBg bg-cover bg-center">
                <div className="h-screen w-full text-white flex items-center justify-center">
                    <div className="flex flex-col px-8 items-center justify-center bg-primaryDark py-4vh rounded-lg drop-shadow-2xl">
                        <h1 className="text-3xl pb-2vh">Create Post</h1>
                        <form className="">
                            <div className="grid grid-cols-4 place-items-center w-full text-lg py-1vh border-y border-neutral-500 mb-4vh">
                                <Link href="./Text" className="flex items-center w-max text-neutral-500"><BsCardText className="mr-1 text-xl" />TXT</Link>
                                <Link href="./Image" className="flex items-center w-max text-neutral-500"><BsCardImage className="mr-1 text-xl" />IMG</Link>
                                <Link href="./Video" className="flex items-center w-max text-neutral-500"><BsCameraVideo className="mr-1 text-xl" />VID</Link>
                                <Link href="./Poll" className="flex items-center w-max text-white"><CgPoll className="mr-1 text-xl" />POL</Link>
                            </div>
                            <div className="flex items-center flex-col w-full pb-2vh">
                                <input
                                    placeholder="Add an interesting title"
                                    type="text"
                                    className="bg-primaryDark w-full mx-3vw text-lg h-10 px-2 border border-neutral-500 rounded-md"
                                />
                            </div>
                            {[...Array(options)].map((x, i) =>
                                <div className="flex items-center w-full mt-1vh px-2 border border-neutral-500 rounded-md">
                                    <input
                                        placeholder={`Option ${i+1}`}
                                        type="text"
                                        name={`Option ${i+1}`}
                                        className="flex-1 bg-primaryDark mr-1vw text-lg h-10"
                                    />
                                </div>
                            )}
                            <div className="flex text-start">
                            {options<5 && <button onClick={(e) => { setOptions(options + 1); e.preventDefault() }} className="text-sky-500 pt-1vh flex-1 w-full text-start">Add Option</button>}
                            {options>2 && <button onClick={(e) => { setOptions(options - 1); e.preventDefault() }} className="text-sky-500 pt-1vh">Remove Option</button> }
                            </div>
                            <button className="bg-secondary w-full h-10 mt-2vh">Create Post</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    export default Poll;