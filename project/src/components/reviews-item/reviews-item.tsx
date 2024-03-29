import {Review} from '../../types/review';
import React from 'react';
import '../../types/number-extensions';
import '../../types/date-extensions';
import {getPercents} from '../../types/number-extensions';
import {formatDate} from '../../types/date-extensions';

type ReviewsItemProps = {
  review: Review;
}

function ReviewsItem({review}: ReviewsItemProps) : JSX.Element {
  const rating = getPercents(review.rating);

  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={formatDate(review.date,'YYYY-MM-DD')}>{formatDate(review.date,'MMMM YYYY')}</time>
      </div>
    </>
  );
}

export default ReviewsItem;
