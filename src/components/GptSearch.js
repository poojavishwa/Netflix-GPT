import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constant";

const GptSearch = () =>{
    return(
       <div>
        <div className="absolute -z-10">
            <img className=""src={BG_IMG}/>
        </div>
       <GptSearchBar/>
       <GptMovieSuggestions/>
       </div>
    )
}
export default GptSearch;