import {Footer} from '../../components/footer/footer';
import {Logo} from '../../components/logo/logo';
import {UserBlock} from '../../components/user-block/user-block';
import {FilmList} from '../../components/film-list/film-list';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {ErrorScreen} from '../error-screen/error-screen';
import {Tabs} from '../../components/tabs/tabs';
import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks.ts';
import {useEffect} from 'react';
import {
  fetchFilmByIDAction,
  fetchSimilarFilmsByIDAction,
  fetchReviewsByIDAction,
  fetchFavoriteFilmsAction, changeFavoriteStatusAction
} from '../../store/api-actions.ts';
import {APIRoute, AuthorizationStatus} from '../../const.ts';
import {getFilm, getSimilarFilms} from '../../store/film-reducer/selectors.ts';
import {getAuthorisationStatus} from '../../store/user-reducer/selectors.ts';
import {getLoadingState} from '../../store/film-reducer/selectors.ts';
import {LoadingScreen} from '../loading-screen/loading-screen.tsx';
import {getFavoriteFilmsCount} from '../../store/main-reducer/selectors.ts';
import {setFavoriteCount} from '../../store/actions.ts';

export function MovieScreen() {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const currentFilm = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const authorizationStatus = useAppSelector(getAuthorisationStatus);
  const isFilmsDataLoading = useAppSelector(getLoadingState);
  const favoriteCount = useAppSelector(getFavoriteFilmsCount);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFilmByIDAction(String(id)));
    dispatch(fetchReviewsByIDAction(String(id)));
    dispatch(fetchSimilarFilmsByIDAction(String(id)));

    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [id, dispatch, authorizationStatus]);


  if (isFilmsDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  if (!currentFilm) {
    return <ErrorScreen/>;
  }

  const changeFavorite = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(APIRoute.Login);
    } else {
      dispatch(changeFavoriteStatusAction({filmId: currentFilm?.id, status: !currentFilm?.isFavorite}));
      if (currentFilm?.isFavorite) {
        dispatch(setFavoriteCount(favoriteCount - 1));
      } else {
        dispatch(setFavoriteCount(favoriteCount + 1));
      }
    }
  };
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
            <Logo/>
            <UserBlock/>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link
                  to={`${APIRoute.Player}/${currentFilm?.id}`}
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" className="btn--play__icon-item">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </ Link>

                <button
                  className="btn btn--list film-card__button"
                  onClick={changeFavorite}
                >
                  {currentFilm?.isFavorite ? (
                    <svg viewBox="0 0 18 14" width="19" height="14">
                      <use xlinkHref="#in-list"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"/>
                    </svg>
                  )}
                  <span>My list</span>
                  <span className="film-card__count">{favoriteCount}</span>
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
          <FilmList films={similarFilms.slice(0, 4)}/>
        </section>
        <Footer/>
      </div>
    </>

  );
}
