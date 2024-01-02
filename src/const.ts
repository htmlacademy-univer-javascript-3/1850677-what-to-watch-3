export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Genre {
  All = 'All Genres',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  KidsFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thriller = 'Thriller'
}

export enum APIRoute {
  Films = '/films',
  Reviews = '/comments',
  Similar = '/similar',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  Player = '/player',
  Favorite = '/favorite'
}

export enum Reducer {
  User = 'USER',
  Main = 'MAIN',
  Film = 'FILM',
}

export enum LoginStatus {
  Success = 'Success',
  IncorrectEmail = 'IncorrectEmail',
  IncorrectPassword = 'IncorrectPassword',
  IncorrectEmailAndPassword = 'IncorrectEmailAndPassword',
}

export const RE_PASSWORD = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/;
export const RE_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
