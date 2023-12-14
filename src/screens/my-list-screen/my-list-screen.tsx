import { FilmList } from '../../components/film-list/film-list';
import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';
import {useAppDispatch, useAppSelector} from '../../components/hooks/hooks.ts';
import {getAuthorisationStatus} from '../../store/user-reducer/selectors.ts';
import {getFavoriteFilmsList} from '../../store/main-reducer/selectors.ts';
import {useEffect} from 'react';
import {AuthorizationStatus} from '../../const.ts';
import {fetchFavoriteFilmsAction} from '../../store/api-actions.ts';

export function MyListScreen() {
  const authorizationStatus = useAppSelector(getAuthorisationStatus);
  const favoriteFilms = useAppSelector(getFavoriteFilmsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authorizationStatus, dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{favoriteFilms.length}</span>
        </h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={favoriteFilms} />
      </section>
      <Footer />
    </div>
  );
}
