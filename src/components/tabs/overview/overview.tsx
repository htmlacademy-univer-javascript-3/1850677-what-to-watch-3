import { useParams } from 'react-router-dom';
import { ErrorScreen } from '../../../screens/error-screen/error-screen';
import { MovieProps } from '../../../screens/movie-page-screen/movie-screen';

type OverviewProps = MovieProps;

export function Overview({ films }: OverviewProps) {
  const { id } = useParams();
  const currentFilm = films.at(Number(id));

  if (!currentFilm) {
    return <ErrorScreen />;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{currentFilm.ratingLevel}</span>
          <span className="film-rating__count">{currentFilm.ratingCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {currentFilm.description}
        <p className="film-card__director">
          <strong>Director: {currentFilm.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {currentFilm.starring}
          </strong>
        </p>
      </div>
    </>);
}
