import React from 'react';

const VideoBackground = () => {
  return (
    <div className="relative -mt-96 overflow-hidden flex items-center justify-center">
      <video
        className="w-full object-cover"
        style={{ width: '70%', height: '70%' }}
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
