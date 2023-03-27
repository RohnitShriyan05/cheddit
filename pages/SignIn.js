/**
 * SignIn component
 *
 * This component displays a sign-in form with fields for email and password.
 * It also includes buttons for signing in and continuing with Google.
 *
 * The form is styled using Tailwind CSS classes and includes a welcome message
 * and a link to register for users who don't have an account yet.
 *
 * The FcGoogle icon from the react-icons library is used to display the Google
 * logo next to the "Continue with Google" button.
 */
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  return (
    <div className="absolute inset-0 text-white flex items-center justify-center bg-SignInBg bg-cover bg-center">
      <div className="h-screen w-full text-white flex items-center justify-center backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center bg-primary py-4vh rounded-lg">
          <h1 className="text-3xl pb-2 px-5vw">Welcome!</h1>
          <p className="md:px-7vw px-20">We are excited to see you!</p>
          <form className="py-2vh">
            <div className="flex items-center flex-col w-full">
              <label className="text-sm pb-2 w-full font-semibold">
                EMAIL<spam className="text-red-600 text-xs">*</spam>
              </label>
              <input
                type="text"
                name="email"
                className="bg-primaryDark w-full mx-3vw text-lg h-10 px-2"
              ></input>
            </div>
            <div className="flex items-center flex-col w-full pt-1vh pb-2vh">
              <label className="text-sm pb-2 w-full font-semibold">
                PASSWORD<spam className="text-red-600 text-xs">*</spam>
              </label>
              <input
                type="text"
                name="email"
                className="bg-primaryDark w-full mx-3vw text-lg h-10 px-2"
              ></input>
            </div>
            <button className="bg-secondary w-full h-10">Sign In</button>
            <p className="text-xs py-2vh">
              Don't have an account yet?{" "}
              <span className="text-sky-500">Register</span>
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
