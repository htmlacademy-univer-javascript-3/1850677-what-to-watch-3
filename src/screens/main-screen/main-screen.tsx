import {Footer} from '../../components/footer/footer';
import {Logo} from '../../components/logo/logo';
import {UserBlock} from '../../components/user-block/user-block';
import {FilmList} from '../../components/film-list/film-list';
import {GenreList} from '../../components/genre-list/genre-list';
import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks.ts';
import {ShowMore} from '../../components/show-more/show-more.tsx';
import {
  getFavoriteFilmsCount,
  getFilmCardCount,
  getGenreFilmList,
  getPromoFilm
} from '../../store/main-reducer/selectors.ts';
import {APIRoute, AuthorizationStatus} from '../../const.ts';
import {Link, useNavigate} from 'react-router-dom';
import {getAuthorisationStatus} from '../../store/user-reducer/selectors.ts';
import {useEffect} from 'react';
import {changeFavoriteStatusAction, fetchFavoriteFilmsAction} from '../../store/api-actions.ts';
import {setFavoriteCount} from '../../store/actions.ts';
import {LoadingScreen} from '../loading-screen/loading-screen.tsx';

export function MainScreen() {
  const promoFilm = useAppSelector(getPromoFilm);
  const filmsGenre = useAppSelector(getGenreFilmList);
  const filmCardCount = useAppSelector(getFilmCardCount);
  const authorizationStatus = useAppSelector(getAuthorisationStatus);
  const favoriteCount = useAppSelector(getFavoriteFilmsCount);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [dispatch, authorizationStatus]);

  if (!promoFilm) {
    return <LoadingScreen/>;
  }

  const changeFavorite = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(APIRoute.Login);
    } else {
      dispatch(changeFavoriteStatusAction({filmId: promoFilm.id, status: !promoFilm.isFavorite}));
      if (promoFilm?.isFavorite) {
        dispatch(setFavoriteCount(favoriteCount - 1));
      } else {
        dispatch(setFavoriteCount(favoriteCount + 1));
      }
    }
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`${APIRoute.Player}/${promoFilm?.id}`}
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
                  {promoFilm?.isFavorite ? (
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList/>

          <FilmList films={filmsGenre.slice(0, filmCardCount)}/>

          {filmsGenre.length > filmCardCount ? <ShowMore/> : ''}
        </section>

        <Footer/>

      </div>
    </>
  );
}
