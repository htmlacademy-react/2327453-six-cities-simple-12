import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers} from './action';
import {Sorting} from "../types/sorting";

const defaultCity = 'Paris';

const initialState = {
  cityName: defaultCity,
  offers: offers.filter((o) => o.city.name === defaultCity),
  sorting: Sorting.popular
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
