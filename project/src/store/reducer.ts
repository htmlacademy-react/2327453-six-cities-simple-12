import {offers} from "../mocks/offers";
import {createReducer} from "@reduxjs/toolkit";
import {changeCity} from "./action";

const initialState = {
  cityName: 'Amsterdam',
  offers: offers
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state) => {
    state.cityName = 'Undefinedam';
  });
});
