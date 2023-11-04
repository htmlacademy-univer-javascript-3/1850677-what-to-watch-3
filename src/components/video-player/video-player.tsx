import {useEffect, useRef, useState} from 'react';

type VideoPlayerProps = {
  isPlaying: boolean;
  isMuted: boolean;
  src: string;
  poster: string;
}

export function VideoPlayer({isPlaying, isMuted, src, poster}: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const playerElement = videoRef.current;

    const handleDataLoaded = () => {
      setIsLoaded(true);
    };

    playerElement?.addEventListener('loadeddata', handleDataLoaded);

    return (() => playerElement?.removeEventListener('loadeddata', handleDataLoaded));

  }, []);


  useEffect(() => {
    const playerElement = videoRef.current;

    if (!isLoaded || !playerElement){
      return;
    }

    if (isPlaying){
      playerElement.play();
    }

    playerElement.pause();
  }, [isPlaying, isLoaded]);

  return (
    <video width="280"
      height="175"
      src={src}
      poster={poster}
      muted={isMuted}
    >
    </video>
  );
}
