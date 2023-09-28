import { useNavigate } from "react-router-dom";
import { IMG_LOGO } from "../utils/constant"
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
const Header = ()=>{
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut=()=>{
        signOut(auth)
        .then(() => {
            navigate("/")
          }).catch((error) => {
            navigate("/error")
          });
    }
    return(
        <div className=" absolute w-full px-8 py-2 bg-gradient-to-b from-black z-40 flex justify-between"> 
            <img className="w-44" src={IMG_LOGO}/>
            {user && <div className="flex space-x-4">
                <img 
                className="w-12 h-12 mt-4"
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