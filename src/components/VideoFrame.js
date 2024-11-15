import React from "react";

const VideoFrame = ({ mainMovieTrailerKey }) => {
  return (
    <div className="relative w-full aspect-video">
      {mainMovieTrailerKey ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${mainMovieTrailerKey}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <div>Trailer not available</div>
      )}
    </div>
  );
};

export default VideoFrame;
