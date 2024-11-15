import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/Redux-Store/moviesSlice";

const useNowPlaying = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mainMovie, setMainMovie] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          API_OPTIONS
        );
        const data = await response.json();
        setMainMovie(data?.results[0]);
        setIsLoading(false);
        dispatch(addNowPlayingMovies(data?.results));
      } catch (error) {
        console.error("Failed to fetch now playing movies", error);
        setIsLoading(false);
      }
    };

    fetchNowPlayingMovies();
  }, []);

  return { mainMovie, isLoading };
};

export default useNowPlaying;
