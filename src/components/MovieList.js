import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-8 bg-transparent grid">
      <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard
            key={movie?.id}
            posterPath={movie?.poster_path}
            title={movie?.original_title}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
