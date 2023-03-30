import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers, setHoveredCardId, setReview} from './action';
import {Offers} from '../types/offer';
import {Review} from '../types/review';

type state = {
  cityName: string;
  offers: Offers;
  hoveredCardId: number | null;
  review: Review | null;
}

const initialState : state = {
  cityName: 'Amsterdam',
  offers: offers,
  hoveredCardId: null,
  review: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) => {
      state.cityName = 'Amsterdam';
    })
    .addCase(getOffers, (state) => {
      state.offers = offers;
    })
    .addCase(setHoveredCardId, (state, action) => {
      const hoveredCardId = action.payload;
      state.hoveredCardId = hoveredCardId;
    })
    .addCase(setReview, (state, action) => {
      const review = action.payload;
      state.review = review;
    });
});

export {reducer};
