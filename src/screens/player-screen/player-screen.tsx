import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks.ts';
import {getFilm, getLoadingState} from '../../store/film-reducer/selectors.ts';
import {useEffect, useRef, useState} from 'react';
import {fetchFilmByIDAction} from '../../store/api-actions.ts';
import {LoadingScreen} from '../loading-screen/loading-screen.tsx';
import {ErrorScreen} from '../error-screen/error-screen.tsx';
import {APIRoute} from '../../const.ts';

export function PlayerScreen() {
  const {id} = useParams();
  const currentFilm = useAppSelector(getFilm);
  const isFilmsDataLoading = useAppSelector(getLoadingState);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPause, setIsPause] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const [progress, setProgress] = useState(0);

  const updateTime = () => {
    if (videoRef.current) {
      setTimeLeft(Math.round(videoRef.current?.duration - videoRef.current?.currentTime));
      setProgress(videoRef.current?.currentTime / videoRef.current?.duration * 100);
    }
  };

  const convertTime = (time: number) => time > 9 ? time : `0${time}`;

  const getTimeLeft = () => {
    const hours = convertTime(Math.floor(timeLeft / 60 / 60));
    const minutes = convertTime(Math.floor(timeLeft / 60 - Math.floor(timeLeft / 60 / 60) * 60));
    const seconds = convertTime(Math.floor(timeLeft % 60));
    return Number(hours) > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
  };

  const onPlayPauseClick = () => {
    if (videoRef.current) {
      if (isPause) {
        videoRef.current.play();
        setIsPause(false);
      } else {
        videoRef.current.pause();
        setIsPause(true);
      }
    }
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (typeof id === 'string') {
      dispatch(fetchFilmByIDAction(id));
    }
    setIsPause(true);
  }, [dispatch, id]);

  if (isFilmsDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  if (!currentFilm) {
    return <ErrorScreen/>;
  }

  return (
    <div className="player">
      <video src={currentFilm.videoLink} className="player__video" poster={currentFilm.posterImage}
        ref={videoRef} onTimeUpdate={updateTime}
      >
      </video>

      <Link to={`${APIRoute.Films}/${currentFilm?.id}`} type="button" className="player__exit">
        Exit
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getTimeLeft()}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayPauseClick}>
            {isPause ? <>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </> : <>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"/>
              </svg>
              <span>Pause</span>
            </>}
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
