import { render, screen } from '@testing-library/react';
import {ShowMore} from './show-more.tsx';
import {withHistory, withStore} from '../../utils/mock-component.tsx';

describe('Component: ShowMore', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<ShowMore/>, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText('Show more')).toBeInTheDocument();
  });
});
