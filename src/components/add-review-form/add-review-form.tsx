import {useState, FormEvent, useRef, ChangeEvent} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch} from '../hooks/hooks.ts';
import {sendReviewAction} from '../../store/api-actions.ts';

export function AddReviewForm(): JSX.Element {
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const [filmRating, setFilmRating] = useState(0);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFilmRating(Number(evt.target.value));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (filmRating && commentRef.current?.value) {
      dispatch(sendReviewAction({
        filmId: id,
        rating: filmRating,
        comment: commentRef.current.value}));
      navigate(`/films/${id}`);
    }
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={handleSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((starCount) => (
            <>
              <input
                className="rating__input"
                id={`star-${starCount}`}
                type="radio"
                name="rating"
                value={starCount}
                onChange={handleChange}
              />
              <label className="rating__label" htmlFor={`star-${starCount}`}>
                Rating {starCount}
              </label>
            </>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          ref={commentRef}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!commentRef.current?.value || commentRef.current?.value.length < 50 || commentRef.current?.value.length > 400 || !filmRating}>
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
