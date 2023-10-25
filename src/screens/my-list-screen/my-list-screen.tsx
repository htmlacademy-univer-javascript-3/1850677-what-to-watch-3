import { FilmList } from '../../components/film-list/film-list';
import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';
import { Film } from '../../types/film';

type MyListProps = {
  film: Film;
  films: Film[];
}

export function MyListScreen({ film, films }: MyListProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList filmId={film.id} films={films} />
      </section>
      <Footer />
    </div>
  );
}
