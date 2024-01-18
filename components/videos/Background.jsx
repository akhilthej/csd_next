import React from 'react';

const VideoBackground = () => {
  return (
    <div className="absolute overflow-hidden flex items-center justify-center -z-10">
      <video
        className="w-full Video1 object-cover"
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
