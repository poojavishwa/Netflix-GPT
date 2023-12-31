import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer =()=>{
    const movies = useSelector((store) => store.movies)
    return(
        movies.nowPlayingMovies &&(
        <div className=" bg-black">
            <div className="pl-2 -mt-24 md:-mt-60 relative z-20 md:pl-5">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
            </div>
        </div>
        )
    )
}
export default SecondaryContainer;