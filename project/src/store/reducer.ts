import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers, getReviews, sortOffers} from './action';
import {Sorting} from '../types/sorting';
import {Offers} from '../types/offer';
import {Reviews} from '../types/review';

const defaultCity = 'Paris';

type state = {
  cityName: string;
  offers: Offers;
  reviews: Reviews;
  sorting: string;
}

const initialState: state = {
  cityName: defaultCity,
  offers: [],
  reviews: [],
  sorting: Sorting.popular
};

function getFilteredOffersByCity(cityName: string, offers: Offers): Offers {
  return offers.filter((o) => o.city.name === cityName);
}

function sortOffersBySortingTypeOrDefault(sorting: string, currentOffers: Offers, cityName: string, offers: Offers) {
  switch(sorting)
  {
    case Sorting.priceLowToHigh:
      return currentOffers.sort((a,b) => a.price - b.price);
    case Sorting.priceHighToLow:
      return currentOffers.sort((a,b) => b.price - a.price);
    case Sorting.topRatedFirst:
      return currentOffers.sort((a,b) => b.rating - a.rating);
    default:
      return getFilteredOffersByCity(cityName, offers);
  }
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
      state.offers = sortOffersBySortingTypeOrDefault(state.sorting, state.offers, state.cityName, state.offers);
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
      state.offers = getFilteredOffersByCity(state.cityName, state.offers);
      state.offers = sortOffersBySortingTypeOrDefault(state.sorting, state.offers, state.cityName, state.offers);
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sorting = action.payload;

      state.offers = sortOffersBySortingTypeOrDefault(state.sorting, state.offers, state.cityName, state.offers);
    });
});

export {reducer};
