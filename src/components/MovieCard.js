import { IMG_CDN_URL } from "../utils/constant"

const MovieCard = ({posterPath}) => {
    if(!posterPath) return null;
    return (
        <div className="w-36 md:w-36 pr-4 ">
            <img
           className="md:hover:scale-125 transition duration-500 cursor-pointer object-cover" 
            src={IMG_CDN_URL+posterPath}/>
        </div>
    )
}
export default MovieCard