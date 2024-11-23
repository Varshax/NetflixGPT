import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/Redux-Store/moviesSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUpComingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          API_OPTIONS
        );
        const data = await response.json();
        dispatch(addUpcomingMovies(data?.results));
      } catch (error) {
        console.error("Failed to fetch now playing movies", error);
      }
    };

    fetchUpComingMovies();
  }, []);
};

export default useUpComingMovies;
