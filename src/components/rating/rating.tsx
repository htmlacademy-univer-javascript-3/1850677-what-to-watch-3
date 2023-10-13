type NumberRatingType = {
  starCount: number;
}

export function Rating({ starCount }: NumberRatingType) {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${starCount}`}
        type="radio"
        name="rating"
        defaultValue={starCount}
      />
      <label className="rating__label" htmlFor={`star-${starCount}`}>
        Rating {starCount}
      </label>
    </>
  );
}
