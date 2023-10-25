import { Film } from '../../types/film';
import { Link } from 'react-router-dom';

type FilmCardProps = {
  film: Film;
  onFilmCard: (id: number) => void;
}

export function FilmCard({ film, onFilmCard }: FilmCardProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onMouseEnterHandler = () => {
    onFilmCard(film.id);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onMouseLeaveHandler = () => {
    onFilmCard(0);
  };

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.imagePath} alt={film.title} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.title}</Link>
      </h3>
    </article>
  );
}

