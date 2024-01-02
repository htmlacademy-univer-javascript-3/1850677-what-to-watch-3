type ReviewProps = {
  text: string;
  author: string;
  dateTime: string;
  rating: number;
}

export function FilmCardReview({text, author, dateTime, rating}: ReviewProps) {
  const dateDisplay = (new Date(dateTime)).toLocaleString('default', {month: 'long', day: 'numeric', year: 'numeric'});
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

