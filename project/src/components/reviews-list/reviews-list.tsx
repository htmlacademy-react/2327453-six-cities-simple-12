import {Reviews} from '../../types/review';
import ReviewsItem from '../../components/reviews-item/reviews-item';
import ReviewsForm from '../../components/reviews-form/reviews-form';

type ReviewsListProps = {
  reviews : Reviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
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
