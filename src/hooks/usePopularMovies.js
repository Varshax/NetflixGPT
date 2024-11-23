import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/Redux-Store/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          API_OPTIONS
        );
        const data = await response.json();
        dispatch(addPopularMovies(data?.results));
      } catch (error) {
        console.error("Failed to fetch now playing movies", error);
      }
    };

    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
