import {ErrorScreen} from '../../../screens/error-screen/error-screen';
import {useAppSelector} from '../../hooks/hooks.ts';
import React from 'react';
import {getFilm} from '../../../store/film-reducer/selectors.ts';

export function Details() {
  const currentFilm = useAppSelector(getFilm);

  if (!currentFilm) {
    return <ErrorScreen/>;
  }

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
            {currentFilm.starring.map((star) => (
              <React.Fragment key={star}>{star}, <br /> </React.Fragment>
            ))}
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{currentFilm.runTime}</span>
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
