import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app';
import {Genre} from './const.ts';
import {store} from './store';
import {Provider} from 'react-redux';
import {checkAuthAction, fetchFilmsAction} from './store/api-actions.ts';
import {Film} from './types.ts';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const PromoFilm: Film = {
  description: '',
  director: '',
  duration: '',
  id: 0,
  previewImage: '',
  rating: 0,
  ratingCount: 0,
  ratingLevel: '',
  starring: [],
  previewVideoLink: '',
  name: 'The Grand Budapest Hotel',
  genre: Genre.Drama,
  releaseYear: 2014
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoFilm={PromoFilm}
      />
    </Provider>
  </React.StrictMode>
);
