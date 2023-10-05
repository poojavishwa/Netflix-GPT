import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constant";

const GptSearch = () =>{
    return(
        <>
        <div className="fixed -z-10">
            <img className="h-screen md:h-full object-cover"src={BG_IMG}/>
        </div>
         <div className="">
       <GptSearchBar/>
       <GptMovieSuggestions/>
       </div>
        </>
       
    )
}
export default GptSearch;