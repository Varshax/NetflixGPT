import React from "react";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SubContainer from "./SubContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const { mainMovie, isLoading } = useNowPlaying();

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
