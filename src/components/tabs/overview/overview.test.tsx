import { render, screen } from '@testing-library/react';
import {makeFakeFilm} from '../../../utils/mocks.ts';
import {Overview} from './overview.tsx';

describe('Component: Overview', () => {
  it('should render correctly', () => {
    const fakeFilm = makeFakeFilm();

    render(<Overview currentFilm={fakeFilm} />);

    expect(screen.getByText(fakeFilm.rating)).toBeInTheDocument();
    expect(screen.getByText(`${fakeFilm.scoresCount} ratings`)).toBeInTheDocument();
    expect(screen.getByText(`Director: ${fakeFilm.director}`)).toBeInTheDocument();
  });
});
