import { useState } from "react"
import { BG_IMG } from "../utils/constant"
import Header from "./Header"

const Login =()=>{
    const [isSignInForm,setisSignInForm] = useState(true)
    const toggleSignInForm=()=>{
        setisSignInForm(!isSignInForm);
    }
    return(
        <div>
        <Header/>
        <div className="absolute">
            <img className=""src={BG_IMG}/>
        </div>
        <form 
        className="text-white bg-black absolute w-3/12 my-36 p-12 mx-auto right-0 left-0 flex-col space-y-7 bg-opacity-80">
            <h1 className="text-3xl font-bold">{isSignInForm  ? "Sign In" : "Sign Up" }</h1>
           {!isSignInForm &&
            <input
            className="p-2 w-full bg-gray-700 text-white rounded-md" 
            type="text" 
            placeholder="Full Name"
            />}
            <input className="p-2 w-full bg-gray-700 text-white rounded-md" type="text" placeholder="Email Address"/>
            <input className="p-2 w-full bg-gray-700 rounded-md" type="password" placeholder="Password"/>
            <button className="p-2 bg-red-500 w-full rounded-md" >{isSignInForm  ? "Sign In" : "Sign Up" }</button>
            <p 
            className="cursor-pointer"
            onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign Up Now" : "Already Registered?Sign In Now"}</p>
        </form>
        </div>
    )
}
export default Login