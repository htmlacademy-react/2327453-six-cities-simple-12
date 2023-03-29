import React from 'react';
import {Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type NearPlacesListProps = {
  offers: Offers;
  onMouseEnter(offerId: number): void;
  onMouseLeave(): void;
}

function NearPlacesList({offers, onMouseEnter, onMouseLeave}: NearPlacesListProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              classNamePrefix={'near-places'}
              onMouseEnter={() => onMouseEnter(offer.id)}
              onMouseLeave={() => onMouseLeave()}
            />
          ))
        }
      </div>
    </section>
  );
}

export default NearPlacesList;
