import {useAppDispatch} from '../hooks/hooks';
import {setFilmCardCount} from '../../store/actions.ts';

export function ShowMore() {
  const dispatch = useAppDispatch();
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={(evn) => {
        evn.preventDefault();
        dispatch(setFilmCardCount());
      }}
      >Show more
      </button>
    </div>
  );
}
