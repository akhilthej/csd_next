import React from 'react';

const VideoBackground = () => {
  return (
    <div className="relative  flex items-center justify-center -z-10">
      <video
        className="w-full object-cover"
        style={{ width: '70%', height: '100%', marginTop: '-200px', overflow: 'hidden'}}
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
