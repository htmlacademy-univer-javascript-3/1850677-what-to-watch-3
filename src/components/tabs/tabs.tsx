import { Film } from '../../types.ts';
import { useState } from 'react';
import { Overview } from './overview/overview';
import { Details } from './details/details';
import { Review } from './review/review';

type TabProps = {
  films: Film[];
}

export function Tabs({ films }: TabProps) {
  const [tab, setTab] = useState('Overview');
  const getTab = (tabName: string) => {
    if (tabName === 'Overview') {
      return <Overview films={films}></Overview>;
    } else if (tabName === 'Details') {
      return <Details films={films}></Details>;
    } else {
      return <Review films={films}></Review>;
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
