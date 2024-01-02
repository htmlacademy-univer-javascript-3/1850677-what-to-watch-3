import { changeGenre, getFilmsByGenre } from '../../store/actions.ts';
import { Genre } from '../../const.ts';
import { useAppSelector, useAppDispatch } from '../hooks/hooks.ts';
import {getCurrentGenre, getFilmList} from '../../store/main-reducer/selectors.ts';

export function GenreList() {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getCurrentGenre);
  const films = useAppSelector(getFilmList);
  const genres: Genre[] = [Genre.All, ...new Set(films.map((x) => x.genre))];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li data-testid="genre-item" key={genre} className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}>
          <button className="catalog__genres-link"
            onClick={() => {
              dispatch(changeGenre(genre));
              dispatch(getFilmsByGenre());
            }}
            style={{ background: 'transparent', border: 'none' }}
          >
            {genre}
          </button>
        </li>))}
    </ul>
  );
}

