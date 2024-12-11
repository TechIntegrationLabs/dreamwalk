import React from 'react';
import YouTube from 'react-youtube';

const VideoBackground = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
      modestbranding: 1,
      playsinline: 1,
      enablejsapi: 1,
    },
  };

  const onReady = (event: any) => {
    // Play video when ready
    event.target.playVideo();
    // Set quality to highest available
    event.target.setPlaybackQuality('hd1080');
  };

  const onEnd = (event: any) => {
    // Loop the video
    event.target.playVideo();
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black/30 z-20" />
      <div className="absolute inset-0 scale-150">
        <YouTube
          videoId="Fy4iiueJiFY"
          opts={videoOptions}
          onReady={onReady}
          onEnd={onEnd}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none"
          iframeClassName="w-full h-full"
        />
      </div>
    </div>
  );
};

export default VideoBackground;