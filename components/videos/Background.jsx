import React from 'react';

const VideoBackground = () => {
  return (
    <div className="absolute top-0 md:-top-56 lg:-top-96 overflow-hidden flex items-center justify-center -z-10">
      <video
        className="w-full object-cover  "
        style={{ width: '100%', height: '100%'}}
        autoPlay
        muted
        loop
      >
        <source src="/blackhole.webm" type="video/webm" />
        {/* Add other video sources (ogg, etc.) if needed */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
