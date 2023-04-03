import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers} from './action';

const initialState = {
  cityName: 'Amsterdam',
  offers: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = offers.filter((o) => o.city.name === state.cityName);
    });
});

export {reducer};
