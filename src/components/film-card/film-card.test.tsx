import { render, screen } from '@testing-library/react';
import {makeFakeFilm} from '../../utils/mocks.ts';
import {FilmCard} from './film-card.tsx';
import {withHistory, withStore} from '../../utils/mock-component.tsx';

describe('Component: FilmCard', () => {
  it('should render correctly', () => {
    const fakeFilm = makeFakeFilm();

    const { withStoreComponent } = withStore(<FilmCard film={fakeFilm}/>, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(fakeFilm.name)).toBeInTheDocument();
  });
});

