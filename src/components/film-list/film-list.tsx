import { useState } from 'react';
import { Film } from '../../types/film';
import { FilmCard } from '../film-card/film-card';

type FilmListProps = {
  filmId: number;
  films: Film[];
}

export function FilmList({ filmId, films }: FilmListProps) {
  const [, setSelectedFilm] = useState(0);
  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        if (film.id !== filmId) {
          return (
            <FilmCard
              key={film.id}
              film={film}
              onFilmCard={(id) => {
                setSelectedFilm(id);
              }}
            />
          );
        }
      })}
    </div>
  );
}
