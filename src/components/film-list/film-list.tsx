import { Film } from '../../types.ts';
import { FilmCard } from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

export function FilmList({films}: FilmListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.name} film={film} />)}
    </div>
  );
}
