import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SubContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black absolute z-10 top-[70%]">
      <MovieList movies={movies?.nowPlayingMovies} title={"Now Playing"} />
      <MovieList movies={movies?.upcomingMovies} title={"Up Coming"} />
      <MovieList movies={movies?.popularMovies} title={"Popular"} />
    </div>
  );
};

export default SubContainer;
