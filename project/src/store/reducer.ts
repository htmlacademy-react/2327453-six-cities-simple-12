import {createReducer} from '@reduxjs/toolkit';
import {changeCity, reviewsLoaded, offersLoaded, setError, setOffersLoadingStatus, sortOffers, setReviewsLoadingStatus} from './action';
import {Sorting} from '../types/sorting';
import {Offers} from '../types/offer';
import {Reviews} from '../types/review';

const defaultCity = 'Paris';

type state = {
  cityName: string;
  offers: Offers;
  reviews: Reviews;
  sorting: string;
  error: string | null;
  isOffersLoadingInProgress: boolean;
  isReviewsLoadingInProgress: boolean;
}

const initialState: state = {
  cityName: defaultCity,
  offers: [],
  reviews: [],
  sorting: Sorting.popular,
  error: null,
  isOffersLoadingInProgress: false,
  isReviewsLoadingInProgress: false,
};

let loadedOffers:Offers = [];
let filteredOffers:Offers = [];

function getFilteredOffers(cityName: string): Offers {
  return loadedOffers.filter((o) => o.city.name === cityName);
}

function getSortedOffers(sorting: string) {
  switch(sorting)
  {
    case Sorting.priceLowToHigh:
      return filteredOffers.sort((a,b) => a.price - b.price);
    case Sorting.priceHighToLow:
      return filteredOffers.sort((a,b) => b.price - a.price);
    case Sorting.topRatedFirst:
      return filteredOffers.sort((a,b) => b.rating - a.rating);
    default:
      return filteredOffers;
  }
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;

      filteredOffers = getFilteredOffers(state.cityName);
      state.offers = getSortedOffers(state.sorting);
    })
    .addCase(offersLoaded, (state, action) => {
      loadedOffers = action.payload;

      filteredOffers = getFilteredOffers(state.cityName);
      state.offers = getSortedOffers(state.sorting);
    })
    .addCase(reviewsLoaded, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sorting = action.payload;

      state.offers = getSortedOffers(state.sorting);
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoadingInProgress = action.payload;
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.isReviewsLoadingInProgress = action.payload;
    });
});

export {reducer};
