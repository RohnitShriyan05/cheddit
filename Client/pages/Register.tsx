import {FC} from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
const Register : FC = ()=>{
    return(
        <div className="absolute inset-0 text-white flex items-center justify-center bg-RegisterBg bg-cover bg-center">
      <div className="h-screen w-full text-white flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-primaryDark py-4vh rounded-lg drop-shadow-2xl">
          <h1 className="text-3xl pb-2">Welcome!</h1>
          <p className="md:px-7vw">New Here? Help our community grow</p>
          <form className="py-2vh px-2vw">
            <div className="flex items-center flex-col w-full ">
              <label className="text-sm pb-2 w-full font-semibold">
                EMAIL<span className="text-red-600 text-xs">*</span>
              </label>
              <input
                type="text"
                name="USERNAME"
                className="bg-primaryDark w-full mx-3vw text-lg h-10 px-2 border border-neutral-500"
              ></input>
            </div>
            <div className="flex items-center flex-col w-full pt-1vh">
              <label className="text-sm pb-2 w-full font-semibold">
                PASSWORD<span className="text-red-600 text-xs">*</span>
              </label>
              <input
                type="password"
                name="PASSWORD"
                className="bg-primaryDark w-full mx-3vw text-lg h-10 px-2 border border-neutral-500"
              ></input>
            </div>
            <div className="flex items-center flex-col w-full pt-1vh pb-2vh">
              <label className="text-sm pb-2 w-full font-semibold">
                CONFIRM PASSWORD<span className="text-red-600 text-xs">*</span>
              </label>
              <input
                type="password"
                name="PASSWORD"
                className="bg-primaryDark w-full mx-3vw text-lg h-10 px-2 border border-neutral-500"
              ></input>
            </div>
            <button className="bg-secondary w-full h-10">Sign Up</button>
            <p className="text-xs py-2vh">
              Already have an account?{" "}
              <Link href="/SignIn" className="text-sky-500">Sign In</Link>
            </p>
            <p className="w-full text-center py-2vh">OR</p>
            <button className="flex items-center w-full border border-secondary h-10 justify-center">
              <FcGoogle className="mr-2 text-2xl" /> Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
    );
}
export default Register;