import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies} from "../utils/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const  popularMovies = useSelector((store) => store.movies.popularMovies)

    const getPopularMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
        API_OPTIONS)
        const json = await data.json();
        // console.log(json.results);
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        if(!popularMovies) getPopularMovies();
    },[]);
}
export default usePopularMovies;