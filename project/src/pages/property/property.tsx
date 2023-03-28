import {Offers} from '../../types/offer';
import {useParams} from 'react-router-dom';
import NotFound from '../not-found/not-found';
import OffersList from '../../components/offers-list/offers-list';
import '../../types/string-extensions';
import '../../types/number-extensions';
import Map from '../../components/map/map';
import React, {useState} from 'react';
import {Point} from '../../types/location';
import {Reviews} from '../../types/review';
import ReviewsList from '../../components/reviews-list/reviews-list';

const PropertySettings = {
  maxImages : 6,
} as const;

type PropertyProps = {
  offers : Offers;
  reviews : Reviews;
}

function Property({offers, reviews}:PropertyProps): JSX.Element {
  const params = useParams();
  const offerId = params.id;
  const offer = offers.find((o) => o.id.toString() === offerId);

  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  if (offer === undefined)
  {
    return <NotFound />;
  }

  const otherOffers = offers.filter((o) => o.id.toString() !== offerId);

  const rating = offer.rating.getPercents();

  const points = otherOffers.map<Point>((o) => ({...o.location, id:o.id}));

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              Array.from(offer.images.slice(0, PropertySettings.maxImages)).map((image) =>
                (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Photo studio"/>
                  </div>
                )
              )
            }
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {
              offer.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${rating}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type.capitalizeFirstLetter()}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {
                  offer.goods.map((good) =>
                    (
                      <li className="property__inside-item" key={good}>
                        {good}
                      </li>
                    )
                  )
                }
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper property__avatar-wrapper${offer.host.isPro ? '--pro' : ''} user__avatar-wrapper`}>
                  <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
                <span className="property__user-status">
                  {
                    offer.host.isPro && 'Pro'
                  }
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offer.description}
                </p>
              </div>
            </div>
            <ReviewsList reviews={reviews} />
          </div>
        </div>
        <Map city={otherOffers[0].city} points={points} selectedPointId={hoveredCardId} className={'property__map'}></Map>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OffersList
              offers={otherOffers}
              onMouseEnter={(offerIdParam: number) => setHoveredCardId(offerIdParam)}
              onMouseLeave={() => setHoveredCardId(null)}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Property;
