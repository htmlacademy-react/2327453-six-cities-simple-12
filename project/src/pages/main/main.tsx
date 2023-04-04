import React, {useState} from 'react';
import OffersList from '../../components/offers-list/offers-list';
import {Point} from '../../types/location';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import {AppRoute, Cities} from '../../const';
import CitiesList from '../../components/cities-list/cities-list';
import {Navigate} from 'react-router-dom';

function Main() : JSX.Element
{
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const offers = useAppSelector((state) => state.offers.slice(0, 4));

  if (offers.length === 0)
  {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const points = offers.map<Point>((o) => ({...o.location, id:o.id}));

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList citiesNames={Cities} />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <OffersList
                offers={offers}
                classNamePrefix={'cities'}
                onMouseEnter={(offerId: number) => setHoveredCardId(offerId)}
                onMouseLeave={() => setHoveredCardId(null)}
              />
            </div>
          </section>
          <div className="cities__right-section">
            <Map city={offers[0].city} points={points} selectedPointId={hoveredCardId} className={'cities__map'}></Map>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
