import {Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offers;
}

function OffersList({offers}:OffersListProps): JSX.Element {
  return (
    <>
      {
        Array.from(offers).map((offer) => <OfferCard offer={offer} key={offer.id}/>)
      }
    </>
  );
}

export default OffersList;
