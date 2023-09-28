import { useRef, useState } from "react"
import { BG_IMG } from "../utils/constant"
import Header from "./Header"
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login =()=>{
    const [isSignInForm,setisSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonClick = ()=>{
        console.log(email.current.value);
        console.log(password.current.value);
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return

        if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value, 
                photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFm-TFFhM9eCT4cFBt4n-cKKGqXLic7goSQA&usqp=CAU"
              }).then(() => {
                const {uid , email , displayName,photoURL} = auth.currentUser;
                dispatch(
                    addUser({
                        uid:uid , 
                        email:email , 
                        displayName:displayName,
                        photoURL:photoURL
                    })
                    )

                navigate("/browse")
              })
              .catch((error) => {
                setErrorMessage(error.message   )
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage)
        });
    } else{
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            navigate("/browse")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage)
  });

    }
}
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
        onSubmit={(e)=>e.preventDefault()}
        className="text-white bg-black absolute w-3/12 my-36 p-12 mx-auto right-0 left-0 flex-col space-y-7 bg-opacity-80">
            <h1 className="text-3xl font-bold">{isSignInForm  ? "Sign In" : "Sign Up" }</h1>
           {!isSignInForm &&
            <input
            ref={name}
            className="p-2 w-full bg-gray-700 text-white rounded-md" 
            type="text" 
            placeholder="Full Name"
            />}
            <input 
            ref={email}
            className="p-2 w-full bg-gray-700 text-white rounded-md" 
            type="text" 
            placeholder="Email Address"
            />
            <input 
            ref={password}
            className="p-2 w-full bg-gray-700 rounded-md" 
            type="password" 
            placeholder="Password"
            />
            <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
            <button 
            className="p-2 bg-red-500 w-full rounded-md" 
            onClick={handleButtonClick}>{isSignInForm  ? "Sign In" : "Sign Up" }
            </button>
            <p 
            className="cursor-pointer"
            onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix?Sign Up Now" : "Already Registered?Sign In Now"}
                </p>
        </form>
        </div>
    )
}
export default Login