import { useParams } from 'react-router-dom';
import { ErrorScreen } from '../../../screens/error-screen/error-screen';
import { MovieProps } from '../../../screens/movie-page-screen/movie-screen';

type DetailsProps = MovieProps;

export function Details({ films }: DetailsProps) {
  const { id } = useParams();
  const currentFilm = films.at(Number(id));

  if (!currentFilm) {
    return <ErrorScreen />;
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
            Bill Murray, <br />
            Edward Norton, <br />
            Jude Law, <br />
            Willem Dafoe, <br />
            Saoirse Ronan, <br />
            Tony Revoloru, <br />
            Tilda Swinton, <br />
            Tom Wilkinson, <br />
            Owen Wilkinson, <br />
            Adrien Brody, <br />
            Ralph Fiennes, <br />
            Jeff Goldblum
          </span>
        </p>
      </div>
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{currentFilm.duration}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{currentFilm.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{currentFilm.releaseYear}</span>
        </p>
      </div>
    </div>);
}
