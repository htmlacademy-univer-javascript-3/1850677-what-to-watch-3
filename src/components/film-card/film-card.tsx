import { useEffect, useState } from 'react';
import { Film } from '../../types/film';
import { Link } from 'react-router-dom';
import { VideoPlayer } from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
}

export function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNeedToPlay, setIsNeedToPlay] = useState(false);

  useEffect(() => {
    if (isNeedToPlay) {
      setTimeout(() => setIsPlaying(true), 1000);
    }
  }, [isNeedToPlay]);

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.imagePath} alt={film.title} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link"
          onMouseEnter={() => setIsNeedToPlay(true)}
          onMouseLeave={() => {
            setIsNeedToPlay(false);
            setIsPlaying(false);
          }}
          to={`/films/${film.id}`}
        >
          {isPlaying && <VideoPlayer isPlaying={isPlaying} isMuted src={film.videoUrl} poster={film.posterImagePath}></VideoPlayer>}
          {!isPlaying && film.title}
        </Link>
      </h3>
    </article>
  );
}

