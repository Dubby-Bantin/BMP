import React from "react";

const Video = () => {
  return (
    <div id="video" className="w-full aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/e6qHYZhnMlc"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
