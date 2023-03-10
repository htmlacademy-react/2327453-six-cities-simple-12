import {Offers} from "../../types/offer";
import Offer from "../offer/offer";

type OffersListProps = {
  offers: Offers
}

function OffersList({offers}:OffersListProps): JSX.Element {
  return (
  <>
    {
      Array.from(offers).map((offer) => {
        return <Offer offer={offer} key={offer.id}/>;
      })
    }
  </>
  );
}

export default OffersList;
