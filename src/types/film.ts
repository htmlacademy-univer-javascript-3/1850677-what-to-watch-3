import { store } from '../store';
import { Genre } from '../const';

export type Film = {
  id: number;
  title: string;
  genre: Genre;
  releaseYear: number;
  imagePath: string;
  posterImagePath: string;
  description: string;
  rating: number;
  ratingLevel: string;
  director: string;
  starring: string[];
  ratingCount: number;
  duration: string;
  videoUrl: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
