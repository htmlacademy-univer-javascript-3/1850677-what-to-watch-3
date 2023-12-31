import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import {LoadingScreen} from './loading-screen.tsx';

describe('Component: LoadingScreen', () => {
  it('should render correct', () => {
    render(<LoadingScreen />);
    expect(screen.getByText('Загрузка страницы...')).toBeInTheDocument();
  });
});
