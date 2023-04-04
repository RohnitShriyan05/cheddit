import { Navbar } from "@/components/Navbar";
import { Post } from "@/components/Post";


export default function Home() {
  return (
    <div className="bg-primaryDark h-max w-full flex items-center justify-center overflow-hidden py-5vh">
        <div className="xl:1/4 lg:w-1/3 md:w-1/2 w-full h-full lg:px-0 px-5vw bg-primaryDark">
          <Post />
          <Post />
          <Post />
        </div>
    </div>

  )
}
