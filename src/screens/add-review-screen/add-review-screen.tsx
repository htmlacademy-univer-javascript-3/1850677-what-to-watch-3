import { AddReviewForm } from '../../components/add-review-form/add-review-form';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';
import { Link } from 'react-router-dom';
import { ErrorScreen } from '../error-screen/error-screen';
import {useAppSelector} from '../../components/hooks/hooks.ts';


export function AddReviewScreen() {
  const currentFilm = useAppSelector((state) => state.film);

  if (!currentFilm) {
    return <ErrorScreen />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={currentFilm.backgroundImage}
            alt={currentFilm.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${currentFilm?.id}`} className="breadcrumbs__link">
                  {currentFilm.name}
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
            src={currentFilm.posterImage}
            alt={currentFilm.name}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <AddReviewForm />
      </div>
    </section>
  );
}
