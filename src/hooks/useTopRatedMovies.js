import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {addTopRatedMovies} from "../utils/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useTopRatedMovies = () =>{
    const dispatch = useDispatch();
    const  topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const getTopRatedMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',
        API_OPTIONS)
        const json = await data.json();
        // console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(()=>{
        if(!topRatedMovies) getTopRatedMovies();
    },[]);
}
export default useTopRatedMovies;