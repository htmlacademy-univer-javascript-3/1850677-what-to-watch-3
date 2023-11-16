import {useEffect, useState} from 'react';
import {Film} from '../../types/film';
import {Link} from 'react-router-dom';
import {VideoPlayer} from '../video-player/video-player';
import './film-card.css';

type FilmCardProps = {
  film: Film;
}

export function FilmCard({film}: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNeedToPlay, setIsNeedToPlay] = useState(false);
  let flag = true;

  useEffect(() => {
    if (isNeedToPlay) {
      setTimeout(() => flag && setIsPlaying(true), 1000);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      flag = false;
    };
  }, [isPlaying, isNeedToPlay]);

  return (
    <article className="small-film-card catalog__films-card">
      <Link className="small-film-card__link small-film-card small-film-card__image"
        onMouseEnter={() => setIsNeedToPlay(true)}
        onMouseLeave={() => {
          setIsNeedToPlay(false);
          setIsPlaying(false);
        }}
        to={`/films/${film.id}`}
      >
        {isPlaying ? <VideoPlayer isPlaying={isPlaying} isMuted src={film.videoUrl} poster={film.posterImagePath}/> :
          <img src={film.imagePath} alt={film.title}/>}

      </Link>
      <h3 className="small-film-card__title">{!isPlaying && film.title}</h3>
    </article>
  );
}

