import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {makeFakeFilm} from '../../utils/mocks.ts';
import {FilmCard} from './film-card.tsx';

describe('Component: FilmCard', () => {
  it('should render correctly', () => {
    const testFilm = makeFakeFilm();

    render(
      <MemoryRouter>
        <FilmCard film={testFilm} />
      </MemoryRouter>
    );

    expect(screen.getByText(testFilm.name)).toBeInTheDocument();
  });
});

