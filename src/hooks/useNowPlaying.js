import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/Redux-Store/moviesSlice";

const useNowPlaying = async () => {
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjQ3YjllYTUwMjdjYjIxNDYyY2FlODI5ZjkzZWEyOCIsIm5iZiI6MTczMDkxOTg5OS41MDMxMDgzLCJzdWIiOiI2NzJiYmNkZTQzM2M4MmVhMjY3ZTlmYWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MNE6ch5J1rdeK01mJwSHrGS8dU_Z0oZ8J4lYfWCHnMs",
    },
  };

  const nowPlayingMovies = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  );
  const json = await nowPlayingMovies.json();
  dispatch(addNowPlayingMovies(json?.results));

  return;
};

export default useNowPlaying;