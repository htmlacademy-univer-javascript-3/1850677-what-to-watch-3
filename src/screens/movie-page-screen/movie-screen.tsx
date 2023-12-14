import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';
import { Film } from '../../types.ts';
import { FilmList } from '../../components/film-list/film-list';
import { Link, useParams } from 'react-router-dom';
import { ErrorScreen } from '../error-screen/error-screen';
import { Tabs } from '../../components/tabs/tabs';
import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks.ts';
import {useEffect} from 'react';
import {fetchFilmByIDAction, fetchSimilarFilmsByIDAction, fetchReviewsByIDAction} from '../../store/api-actions.ts';
import {AuthorizationStatus} from '../../const.ts';
import {getFilm, getSimilarFilms} from '../../store/film-reducer/selectors.ts';
import {getAuthorisationStatus} from '../../store/user-reducer/selectors.ts';
import {getLoadingState} from '../../store/main-reducer/selectors.ts';
import {LoadingScreen} from '../loading-screen/loading-screen.tsx';

export type MovieProps = {
  films: Film[];
}

export function MovieScreen() {
  window.scrollTo(0, 0);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const currentFilm = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const authorizationStatus = useAppSelector(getAuthorisationStatus);
  const isFilmsDataLoading = useAppSelector(getLoadingState);

  useEffect(() => {
    dispatch(fetchFilmByIDAction(String(id)));
    dispatch(fetchReviewsByIDAction(String(id)));
    dispatch(fetchSimilarFilmsByIDAction(String(id)));
  }, [id, dispatch]);


  if (isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (!currentFilm) {
    return <ErrorScreen />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={currentFilm.backgroundImage}
              alt={currentFilm.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <Link to={`/films/${currentFilm.id}/review`} className="btn film-card__button">
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={currentFilm.posterImage}
                alt={`${currentFilm.name} poster`}
                width={218}
                height={327}
              />
            </div>
            <Tabs></Tabs>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similarFilms}/>
        </section>
        <Footer />
      </div>
    </>

  );
}
