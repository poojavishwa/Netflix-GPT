import { useNavigate } from "react-router-dom";
import { IMG_LOGO, SUPPORTED_LANGUAGES } from "../utils/constant"
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/GptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";
const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
    const handleSignOut=()=>{
        signOut(auth)
        .then(() => {}).catch((error) => {
            navigate("/error")
          });
    }

    useEffect(()=>{
      const unSubscribe =   onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid , email , displayName,photoURL} = user;
            dispatch(addUser({uid:uid , email:email , displayName:displayName,photoURL:photoURL}))
            navigate("/browse")
          } else {
            dispatch(removeUser())
            navigate("/")
          }
        });
        //unsubscribe when my component unmounts
        return ()=>unSubscribe();
      },[])

      const handleGptSearchClick=()=>{
        dispatch(toggleGptSearchView());
      }

      const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value));

      }

    return(
        <div className=" absolute w-full px-8 py-2 bg-gradient-to-b from-black z-40 flex flex-col md:flex-row justify-between"> 
            <img className="w-44 mx-auto md:mx-0" src={IMG_LOGO}/>
            {user && <div className="flex space-x-4 justify-between">
             {showGptSearch &&
              <select className="py-2 px-4 mx-4 my-2 bg-gray-500 text-white" onChange={handleLanguageChange}>
                {
                  SUPPORTED_LANGUAGES.map((lang)=>(
                  <option key={lang.indentifier} value={lang.indentifier}>
                    {lang.name}
                  </option>))
                }</select>}
              <button className="py-2 px-4 mx-4 my-2 bg-sky-500  rounded-lg text-white" onClick={handleGptSearchClick}>
                { showGptSearch ? "HomePage" : "GPT Search"}</button>
                <img 
                className="hidden md:block w-12 h-12 mt-4"
                src={user?.photoURL}/>
                <button 
                className="font-bold text-white text-3xl"
                onClick={handleSignOut}
                >Sign Out</button>
            </div>}
        </div>
        
    )
}
export default Header