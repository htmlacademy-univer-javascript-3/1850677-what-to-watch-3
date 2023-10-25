import { useState } from 'react';
import { AddReviewForm } from '../../components/add-review-form/add-review-form';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';
import { Film } from '../../types/film';
import { Link, useParams } from 'react-router-dom';
import { ErrorScreen } from '../error-screen/error-screen';
import { AppRoute } from '../../const';

type AddReviewProps = {
  films: Film[];
}

export function AddReviewScreen({ films }: AddReviewProps) {
  const { id } = useParams();
  const film = films.at(Number(id?.slice(1)));

  const [, setFilmRating] = useState(0);

  if (!film) {
    return <ErrorScreen />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film.imagePath}
            alt={film.title}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film} className="breadcrumbs__link">
                  {film.title}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImagePath}
            alt={film.title}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <AddReviewForm onAnswer={(rating) => setFilmRating(rating)} />
      </div>
    </section>
  );
}
