import { useParams } from 'react-router-dom';
import { FilmCardReview } from '../../components/film-card/film-card-review';
import { FilmList } from '../../components/film-list/film-list';
import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';
import { MovieProps } from './movie-screen';
import { ErrorScreen } from '../error-screen/error-screen';

type MoviePageReviewProps = MovieProps;

export function MoviePageReviewScreen({ films }: MoviePageReviewProps) {
  const { id } = useParams();
  const film = films.at(Number(id));

  if (!film) {
    return <ErrorScreen />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film.previewImage}
              alt={film.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.releaseYear}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.previewImage}
                alt={`${film.name} poster`}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                      Overview
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                      Details
                    </a>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">
                  <FilmCardReview
                    text='Discerning travellers and Wes Anderson fans will luxuriate
                  in the glorious Mittel-European kitsch of one of the
                  director&apos;s funniest and most exquisitely designed films in
                  years.'
                    author='Kate Muir'
                    dateTime='2016-12-24'
                    dateDisplay='December 24, 2016'
                    rating='8,9'
                  />

                  <FilmCardReview
                    text='Anderson&apos;s films are too precious for some, but for those of
                    us willing to lose ourselves in them, they&apos;re a delight.
                    &quot;The Grand Budapest Hotel&quot; is no different, except that he
                    has added a hint of gravitas to the mix, improving the
                    recipe.'
                    author='Bill Goodykoontz'
                    dateTime='2015-11-18'
                    dateDisplay='November 18, 2015'
                    rating='8,0'
                  />

                  <FilmCardReview
                    text='I didn&apos;t find it amusing, and while I can appreciate the
                  creativity, it&apos;s an hour and 40 minutes I wish I could take
                  back.'
                    author='Amanda Greever'
                    dateTime='2015-11-18'
                    dateDisplay='November 18, 2015'
                    rating='8,0'
                  />

                  <FilmCardReview
                    text='The mannered, madcap proceedings are often delightful,
                    occasionally silly, and here and there, gruesome and/or
                    heartbreaking.'
                    author='Matthew Lickona'
                    dateTime='2016-12-20'
                    dateDisplay='December 20, 2016'
                    rating='7,2'
                  />

                  <FilmCardReview
                    text='It is certainly a magical and childlike way of storytelling,
                    even if the content is a little more adult.'
                    author='Paula Fleri-Soler'
                    dateTime='2016-12-20'
                    dateDisplay='December 20, 2016'
                    rating='7,6'
                  />

                  <FilmCardReview
                    text='It is certainly a magical and childlike way of storytelling,
                    even if the content is a little more adult.'
                    author='Paula Fleri-Soler'
                    dateTime='2016-12-20'
                    dateDisplay='December 20, 2016'
                    rating='7,0'
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={films} />
        </section>
        <Footer />
      </div>
    </>
  );
}
