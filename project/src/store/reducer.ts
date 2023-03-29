import {offers} from "../mocks/offers";
import {createReducer} from "@reduxjs/toolkit";
import {changeCity, getOffers} from "./action";

const initialState = {
  cityName: 'Amsterdam',
  offers: offers
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) => {
    state.cityName = 'Amsterdam';
  })
    .addCase(getOffers, (state) => {
    state.offers = offers;
  })
  ;
});

export {reducer};
