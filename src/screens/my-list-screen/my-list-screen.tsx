import { FilmCard } from '../../components/film-card/film-card';
import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';

export function MyListScreen() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
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
        </div>
      </section>
      <Footer />
    </div>
  );
}
