import React from "react";
import VideoTitle from "./VideoTitle";
import VideoFrame from "./VideoFrame";
import useMainMovieTrailer from "../hooks/useMainMovieTrailer";
import { useSelector } from "react-redux";

const MainContainer = ({ mainMovie }) => {
  useMainMovieTrailer(mainMovie?.id);
  const mainMovieTrailerKey = useSelector(
    (state) => state.movies.mainMovieTrailer
  );

  return (
    <div className="relative pt-8">
      <div className="absolute left-0 w-full z-0 -top-48">
        <VideoFrame mainMovieTrailerKey={mainMovieTrailerKey?.key} />
      </div>
      <div className="relative z-10">
        <VideoTitle mainMovie={mainMovie} />
      </div>
    </div>
  );
};

export default MainContainer;
