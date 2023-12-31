import { render, screen } from '@testing-library/react';
import {makeFakeReviews} from '../../../utils/mocks.ts';
import {Reviews} from './review.tsx';

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    const reviews = makeFakeReviews();

    render(<Reviews reviews={reviews} />);

    expect(screen.getByTestId('reviews')).toBeInTheDocument();
  });
});
