import React from "react";
import { useNavigate } from "react-router-dom";
import useNowPlaying from "../hooks/useNowPlaying";

const Browse = () => {
  const navigate = useNavigate();
  useNowPlaying();

  return <></>;
};

export default Browse;
