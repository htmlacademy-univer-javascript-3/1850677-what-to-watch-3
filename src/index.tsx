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
  posterImage: '',
  description: '',
  director: '',
  runTime: '',
  id: 'promo',
  previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
  rating: 0,
  scoresCount: 0,
  backgroundImage: '',
  starring: [],
  previewVideoLink: '',
  name: 'The Grand Budapest Hotel',
  genre: Genre.Drama,
  released: 2014
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
