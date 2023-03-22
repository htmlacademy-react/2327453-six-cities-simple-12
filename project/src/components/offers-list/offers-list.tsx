import {Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
  onMouseEnter(offerId: number): void;
}

function OffersList({offers, onMouseEnter}:OffersListProps): JSX.Element {
  return (
    <>
      {
        Array.from(offers).map((offer) => <OfferCard offer={offer} key={offer.id} onMouseEnter={() => onMouseEnter(offer.id)}/>)
      }
    </>
  );
}

export default OffersList;
