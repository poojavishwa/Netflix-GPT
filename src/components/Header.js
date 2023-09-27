import { IMG_LOGO } from "../utils/constant"

const Header = ()=>{
    return(
        <div className=" absolute px-8 py-2 bg-gradient-to-b from-black z-40"> 
            <img className="w-44" src={IMG_LOGO}/>
        </div>
    )
}
export default Header