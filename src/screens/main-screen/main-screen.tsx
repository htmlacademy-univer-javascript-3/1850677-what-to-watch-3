import { FilmCard } from '../../components/film-card/film-card';
import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';

export type PromoInfo = {
  title: string;
  genre: string;
  year: number;
  imapePath: string;
  posterImagePath: string;
}

export function MainScreen({ title, genre, year, imapePath, posterImagePath }: PromoInfo): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={imapePath} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImagePath} alt={title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <FilmCard imagePath="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
              title="Fantastic Beasts: The Crimes of Grindelwald"
            />

            <FilmCard imagePath="img/bohemian-rhapsody.jpg"
              title="Bohemian Rhapsody"
            />

            <FilmCard imagePath="img/macbeth.jpg"
              title="Macbeth"
            />

            <FilmCard imagePath="img/aviator.jpg"
              title="Aviator"
            />

            <FilmCard imagePath="img/we-need-to-talk-about-kevin.jpg"
              title="We need to talk about Kevin"
            />

            <FilmCard imagePath="img/what-we-do-in-the-shadows.jpg"
              title="What We Do in the Shadows"
            />

            <FilmCard imagePath="img/revenant.jpg"
              title="Revenant"
            />

            <FilmCard imagePath="img/johnny-english.jpg"
              title="Johnny English"
            />

            <FilmCard imagePath="img/shutter-island.jpg"
              title="Shutter Island"
            />

            <FilmCard imagePath="img/pulp-fiction.jpg"
              title="Pulp Fiction"
            />

            <FilmCard imagePath="img/no-country-for-old-men.jpg"
              title="No Country for Old Men"
            />

            <FilmCard imagePath="img/snatch.jpg"
              title="Snatch"
            />

            <FilmCard imagePath="img/moonrise-kingdom.jpg"
              title="Moonrise Kingdom"
            />

            <FilmCard imagePath="img/seven-years-in-tibet.jpg"
              title="Seven Years in Tibet"
            />

            <FilmCard imagePath="img/midnight-special.jpg"
              title="Midnight Special"
            />

            <FilmCard imagePath="img/war-of-the-worlds.jpg"
              title="War of the Worlds"
            />

            <FilmCard imagePath="img/dardjeeling-limited.jpg"
              title="Dardjeeling Limited"
            />

            <FilmCard imagePath="img/orlando.jpg"
              title="Orlando"
            />

            <FilmCard imagePath="img/mindhunter.jpg"
              title="Mindhunter"
            />

            <FilmCard imagePath="img/midnight-special.jpg"
              title="Midnight Special"
            />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}
