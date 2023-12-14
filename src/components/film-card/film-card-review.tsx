type ReviewProps = {
  text: string;
  author: string;
  dateTime: string;
  dateDisplay: string;
  rating: number;
}

export function FilmCardReview({text, author, dateTime, dateDisplay, rating} : ReviewProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>
        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={dateTime}>
            {dateDisplay}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

