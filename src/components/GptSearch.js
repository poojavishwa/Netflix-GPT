import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constant";

const GptSearch = () =>{
    return(
       <>
        <div className="fixed -z-10">
            <img className=""src={BG_IMG}/>
        </div>
        <div >
       <GptSearchBar/>
       <GptMovieSuggestions/>
       </div>
       </>
    )
}
export default GptSearch;