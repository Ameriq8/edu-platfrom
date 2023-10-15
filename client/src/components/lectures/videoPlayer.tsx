import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoJSProps {
  options: any;
  onReady?: (player: any) => void;
}

const VideoJS: React.FC<VideoJSProps> = ({ options, onReady }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement('video');
      videoElement.classList.add('video-js', 'vjs-big-play-centered');

      if (videoRef.current) {
        videoRef.current.appendChild(videoElement);
        const player = (playerRef.current = videojs(videoElement, options, () => {
          videojs.log('player is ready');
          console.log(videojs.getPlugins());
          onReady && onReady(player);
        }));
      }
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default function VideoPlayer() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    preload: 'auto',
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 0.75, 1, 1.5, 2],
    poster: 'https://ta3leem.iq/media/Artboard_1_copy_3250.png',
    sources: [
      {
        src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  return (
    <>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
}
