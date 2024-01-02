import {FilmCardReview} from '../../film-card/film-card-review';
import {Review} from '../../../types.ts';

type ReviewProps = {
  reviews: Review[];
}

export function Reviews({reviews}: ReviewProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col" data-testid="reviews">
        {reviews.map((review) =>
          (
            <FilmCardReview key={review.id}
              text={review.comment}
              author={review.user}
              rating={review.rating}
              dateTime={review.date}
            />
          ))}
      </div>
    </div>
  );
}
