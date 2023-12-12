type RatingLevelProps = {
  rating: number;
};

export function RatingLevel({rating}: RatingLevelProps) {
  return (
    <span className="film-rating__level">
      {(() => {
        if (0 <= rating && rating < 3) {
          return (
            <>Bad</>
          );
        } else if (3 <= rating && rating < 5) {
          return (
            <>Normal</>
          );
        } else if (5 <= rating && rating < 8) {
          return (
            <>Good</>
          );
        } else if (8 <= rating && rating < 10) {
          return (
            <>Very good</>
          );
        } else {
          return (
            <>Awesome</>
          );
        }
      })()}
    </span>);
}
