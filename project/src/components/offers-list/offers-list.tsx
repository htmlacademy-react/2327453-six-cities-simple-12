import {Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
  onMouseEnter(offerId: number): void;
  onMouseLeave(): void;
}

function OffersList({offers, onMouseEnter, onMouseLeave}:OffersListProps): JSX.Element {
  return (
    <>
      {
        offers.map((offer) =>
          (<OfferCard
            offer={offer}
            key={offer.id}
            onMouseEnter={() => onMouseEnter(offer.id)}
            onMouseLeave={() => onMouseLeave()}
          />))
      }
    </>
  );
}

export default OffersList;
