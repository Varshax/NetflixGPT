import React from "react";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SubContainer from "./SubContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const Browse = () => {
  const { mainMovie, isLoading } = useNowPlaying();
  usePopularMovies();
  useUpComingMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {mainMovie && <MainContainer mainMovie={mainMovie} />}
      <SubContainer />
    </>
  );
};

export default Browse;
