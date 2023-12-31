import { render, screen } from '@testing-library/react';
import {makeFakeFilm} from '../../../utils/mocks.ts';
import {Details} from './details.tsx';

describe('Component: Details', () => {
  it('should render correctly', () => {
    const fakeFilm = makeFakeFilm();

    render(<Details currentFilm={fakeFilm} />);
    expect(screen.getByText('Genre')).toBeInTheDocument();
    expect(screen.getByText(fakeFilm.genre)).toBeInTheDocument();
    expect(screen.getByText('Released')).toBeInTheDocument();
    expect(screen.getByText(fakeFilm.released)).toBeInTheDocument();
  });
});
