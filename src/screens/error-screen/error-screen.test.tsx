import { render, screen } from '@testing-library/react';
import {ErrorScreen} from './error-screen.tsx';
import {withHistory, withStore} from '../../utils/mock-component.tsx';

describe('Screen: ErrorScreen', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<ErrorScreen/>, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText('Ошибка')).toBeInTheDocument();
    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});
