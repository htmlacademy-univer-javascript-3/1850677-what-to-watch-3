import { useParams } from 'react-router-dom';
import { ErrorScreen } from '../../../screens/error-screen/error-screen';
import { MovieProps } from '../../../screens/movie-page-screen/movie-screen';
import { FilmCardReview } from '../../film-card/film-card-review';

type ReviewProps = MovieProps;

export function Review({ films }: ReviewProps) {
  const { id } = useParams();
  const currentFilm = films.at(Number(id));

  if (!currentFilm) {
    return <ErrorScreen />;
  }

  return (
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
    </div>);
}
