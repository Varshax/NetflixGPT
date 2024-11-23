import React from "react";
import { IMG_CDN } from "../utils/Constants";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="min-w-[180px] max-w-[180px] flex-shrink-0 bg-gray-200 rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-70 object-cover"
        src={`${IMG_CDN}/${posterPath}`}
        alt={title || "Movie Poster"}
      />
      <div className="p-2">
        <h2 className="text-sm font-semibold text-gray-800 truncate">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default MovieCard;
