import { render, screen } from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {RatingLevel} from './ratingLevel.tsx';

describe('Component: RatingLevel', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<RatingLevel rating={2}/>, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText('Bad')).toBeInTheDocument();
  });
});
