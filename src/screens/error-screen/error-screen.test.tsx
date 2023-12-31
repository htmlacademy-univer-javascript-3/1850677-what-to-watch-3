import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import {ErrorScreen} from './error-screen.tsx';

describe('Component: ErrorScreen', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <ErrorScreen />
      </MemoryRouter>
    );

    expect(screen.getByText('Ошибка')).toBeInTheDocument();
    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});
