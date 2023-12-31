import {ErrorScreen} from '../../../screens/error-screen/error-screen';
import {useAppSelector} from '../../hooks/hooks.ts';
import {getFilm} from '../../../store/film-reducer/selectors.ts';

export function Details() {
  const currentFilm = useAppSelector(getFilm);

  if (!currentFilm) {
    return <ErrorScreen/>;
  }

  const getRunTime = () => {
    const runTime = Number(currentFilm.runTime);
    const hours = Math.floor(runTime / 60);
    const minutes = Math.floor(runTime - hours * 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{currentFilm.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {currentFilm.starring.join(',\n')}
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getRunTime()}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{currentFilm.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{currentFilm.released}</span>
        </p>
      </div>
    </div>);
}
