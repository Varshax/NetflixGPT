import React from "react";

const VideoTitle = ({ mainMovie }) => {
  return (
    <div className="">
      <div className="text-white font-bold text-4xl mt-[20%] px-[5%]">
        {mainMovie?.title}
      </div>
      <div className="text-white w-4/12 px-[5%] mt-[1%]">
        {mainMovie?.overview}
      </div>
    </div>
  );
};

export default VideoTitle;
