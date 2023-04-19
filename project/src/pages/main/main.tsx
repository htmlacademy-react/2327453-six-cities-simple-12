import React, {useState} from 'react';
import OffersList from '../../components/offers-list/offers-list';
import {Point} from '../../types/location';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import {Cities} from '../../const';
import CitiesList from '../../components/cities-list/cities-list';
import SortingVariants from '../../components/sorting-variants/sorting-variants';
import NotFound from '../not-found/not-found';

function Main() : JSX.Element
{
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const city = useAppSelector((state) => state.cityName);
  const offers = useAppSelector((state) => state.offers);

  const offersCount = offers.length;

  if (offersCount === 0)
  {
    return <NotFound />;
  }

  const points = offers.map<Point>((o) => ({...o.location, id:o.id}));

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList citiesNames={Cities} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} places to stay in {city}</b>
            <SortingVariants />
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
