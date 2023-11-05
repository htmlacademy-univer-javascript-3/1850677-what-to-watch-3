import { Film } from '../../types/film';
import { FilmCard } from '../film-card/film-card';

type FilmListProps = {
  filmId: number;
  films: Film[];
  genre?: string;
}

export function FilmList({ filmId, films, genre }: FilmListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        if (film.id !== filmId && (genre === undefined || film.genre === genre)) {
          return (
            <FilmCard
              key={film.id}
              film={film}
            />
          );
        }
      })}
    </div>
  );
}
