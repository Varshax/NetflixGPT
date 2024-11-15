import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addMainMovieTrailer } from "../utils/Redux-Store/moviesSlice";

const useMainMovieTrailer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const fetchMovieTrailer = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            API_OPTIONS
          );
          let data = await response.json();
          data = data.results.filter((videos) => videos.type === "Trailer");
          dispatch(addMainMovieTrailer(data[1]));
        } catch (error) {
          console.error("Failed to fetch movie videos", error);
        }
      };

      fetchMovieTrailer();
    }
  }, [dispatch, id]);
};

export default useMainMovieTrailer;
