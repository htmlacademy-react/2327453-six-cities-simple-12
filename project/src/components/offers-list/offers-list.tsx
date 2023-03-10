import {Offers} from "../../types/offer";
import Offer from "../offer/offer";

type OffersListProps = {
  offers: Offers
}

function OffersList({offers}:OffersListProps): JSX.Element {
  return (
  <>
    {
      Array.from(offers).map((offer, index) => {
        return <Offer offer={offer} key={index}/>;
      })
    }
  </>
  );
}

export default OffersList;
