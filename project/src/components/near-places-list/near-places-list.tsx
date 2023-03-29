import OffersList from '../offers-list/offers-list';
import React from 'react';
import {Offers} from '../../types/offer';

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
        <OffersList
          offers={offers}
          classNamePrefix={'near-places'}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>
    </section>
  );
}

export default NearPlacesList;
