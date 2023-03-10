import {Offers} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import {useState} from 'react';

type OffersListProps = {
  offers: Offers;
}

function OffersList({offers}:OffersListProps): JSX.Element {

  const [hoveredCardId, setHoveredCardId] = useState(1);

  return (
    <>
      {
        Array.from(offers).map((offer) => <OfferCard offer={offer} key={offer.id}/>)
      }
    </>
  );
}

export default OffersList;
