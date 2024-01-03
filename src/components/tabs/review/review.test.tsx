import { render, screen } from '@testing-library/react';
import {makeFakeReviews} from '../../../utils/mocks.ts';
import {Reviews} from './review.tsx';

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    const fakeReviews = makeFakeReviews();

    render(<Reviews reviews={fakeReviews} />);

    expect(screen.getByTestId('reviews')).toBeInTheDocument();
  });
});
