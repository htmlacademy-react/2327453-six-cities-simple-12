import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers, setHoveredCardId} from './action';
import {Offers} from '../types/offer';

type state = {
  cityName: string;
  offers: Offers;
  hoveredCardId: number | null;
}

const initialState : state = {
  cityName: 'Amsterdam',
  offers: offers,
  hoveredCardId: null,
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
    });
});

export {reducer};
