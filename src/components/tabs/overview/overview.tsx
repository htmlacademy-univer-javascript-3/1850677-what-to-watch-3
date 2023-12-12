import { ErrorScreen } from '../../../screens/error-screen/error-screen';
import {useAppSelector} from '../../hooks/hooks.ts';
import {RatingLevel} from '../../ratingLevel/ratingLevel.tsx';

export function Overview() {
  const currentFilm = useAppSelector((state) => state.film);

  if (!currentFilm) {
    return <ErrorScreen />;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm.rating}</div>
        <p className="film-rating__meta">
          <RatingLevel rating={currentFilm.rating}></RatingLevel>
          <span className="film-rating__count">{currentFilm.scoresCount} ratings</span>
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
