import { render, screen } from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {makeFakeFilmsList} from '../../utils/mocks.ts';
import {FilmList} from './film-list.tsx';

describe('Component: FilmList', () => {
  it('should render correctly', () => {
    const testFilms = makeFakeFilmsList();

    const { withStoreComponent } = withStore(<FilmList films={testFilms}/>, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const cardFilm = screen.getAllByTestId('film-card');

    expect(cardFilm.length).toBe(testFilms.length);
  });
});
