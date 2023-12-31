import { render, screen } from '@testing-library/react';
import {AddReviewForm} from './add-review-form';
import {withHistory, withStore} from '../../utils/mock-component.tsx';

describe('Component: AddReviewForm', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<AddReviewForm />, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    expect(screen.getByText('Post')).toBeInTheDocument();
  });
});
