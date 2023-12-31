import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {makeFakeReviews} from '../../utils/mocks.ts';
import {FilmCardReview} from './film-card-review.tsx';

describe('Component: FilmCardReview', () => {
  it('should render correct', () => {
    const review = makeFakeReviews()[0];

    render(<FilmCardReview text={review.comment} author={review.user} rating={review.rating} dateDisplay={review.date} dateTime={review.date} />);

    expect(screen.queryByText(review.comment)).toBeInTheDocument();
    expect(screen.getByText(review.user)).toBeInTheDocument();
  });
});
