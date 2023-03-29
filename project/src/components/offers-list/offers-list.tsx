import {Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
  classNamePrefix : string;
  onMouseEnter(offerId: number): void;
  onMouseLeave(): void;
}

function OffersList({offers, classNamePrefix, onMouseEnter, onMouseLeave}:OffersListProps): JSX.Element {
  return (
    <>
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            classNamePrefix={classNamePrefix}
            onMouseEnter={() => onMouseEnter(offer.id)}
            onMouseLeave={() => onMouseLeave()}
          />
        ))
      }
    </>
  );
}

export default OffersList;
