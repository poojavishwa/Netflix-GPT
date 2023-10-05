import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {addUpcomingMovies} from "../utils/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useUpcomingMovies = () =>{
    const dispatch = useDispatch();
    const  upcomingMovies = useSelector((store) => store.movies.upcomingMovies)

    const getUpcomingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
        API_OPTIONS)
        const json = await data.json();
        // console.log(json.results);
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
        if(!upcomingMovies) getUpcomingMovies();
    },[]);
}
export default useUpcomingMovies;