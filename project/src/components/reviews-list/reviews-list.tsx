import ReviewsItem from '../../components/reviews-item/reviews-item';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import {store} from '../../store';
import {loadReviewsAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {useEffect} from 'react';

type ReviewsListProps = {
  offerId : string | undefined;
}

function ReviewsList({offerId}: ReviewsListProps): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);

  const isLoadingInProgress = useAppSelector((state) => state.isOffersLoadingInProgress);

  useEffect(() => {
    if(offerId && ! reviews.length) {
      store.dispatch(loadReviewsAction(offerId));
    }
  }, [offerId]);

  if (isLoadingInProgress) {
    return <LoadingScreen />;
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => (
            <li className="reviews__item" key={review.id}>
              <ReviewsItem
                review={review}
              />
            </li>
          ))
        }
      </ul>
      <ReviewsForm />
    </section>
  );
}

export default ReviewsList;
