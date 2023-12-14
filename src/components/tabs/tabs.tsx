import { useState } from 'react';
import { Overview } from './overview/overview';
import { Details } from './details/details';
import { Reviews } from './review/review';
import {useAppSelector} from '../hooks/hooks.ts';
import {getReviews} from '../../store/film-reducer/selectors.ts';


export function Tabs() {
  const [tab, setTab] = useState('Overview');
  const reviews = useAppSelector(getReviews);
  const getTab = (tabName: string) => {
    if (tabName === 'Overview') {
      return <Overview></Overview>;
    } else if (tabName === 'Details') {
      return <Details></Details>;
    } else {
      return <Reviews reviews={reviews}></Reviews>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${tab === 'Overview' ? ' film-nav__item--active' : ''}`}>
            <a onClick={() => setTab('Overview')} className="film-nav__link">
              Overview
            </a>
          </li>
          <li className={`film-nav__item ${tab === 'Details' ? ' film-nav__item--active' : ''}`}>
            <a onClick={() => setTab('Details')} className="film-nav__link">
              Details
            </a>
          </li>
          <li className={`film-nav__item ${tab === 'Reviews' ? ' film-nav__item--active' : ''}`}>
            <a onClick={() => setTab('Reviews')} className="film-nav__link">
              Reviews
            </a>
          </li>
        </ul>
      </nav>
      {getTab(tab)}
    </div>
  );
}
