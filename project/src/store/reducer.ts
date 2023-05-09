import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  reviewsLoaded,
  offersLoaded,
  setError,
  setOffersLoadingStatus,
  sortOffers,
  setReviewsLoadingStatus,
  setAuthorizationStatus, setUser
} from './action';
import {Sorting} from '../types/sorting';
import {Offers} from '../types/offer';
import {Reviews} from '../types/review';
import {User} from '../types/user';
import {saveToken} from "../services/token";

const defaultCity = 'Paris';

type state = {
  cityName: string;
  loadedOffers: Offers;
  filteredOffers: Offers;
  sortedOffers: Offers;
  reviews: Reviews;
  sorting: string;
  error: string | null;
  isOffersLoadingInProgress: boolean;
  isReviewsLoadingInProgress: boolean;
  authorizationStatus: boolean;
  user: User | null;
}

const initialState: state = {
  cityName: defaultCity,
  loadedOffers: [],
  filteredOffers: [],
  sortedOffers: [],
  reviews: [],
  sorting: Sorting.popular,
  error: null,
  isOffersLoadingInProgress: false,
  isReviewsLoadingInProgress: false,
  authorizationStatus: false,
  user: null
};

function getFilteredOffers(loadedOffers: Offers, cityName: string): Offers {
  return loadedOffers.filter((o) => o.city.name === cityName);
}

function getSortedOffers(filteredOffers: Offers, sorting: string) {
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

      state.filteredOffers = getFilteredOffers(state.loadedOffers, state.cityName);
      state.sortedOffers = getSortedOffers(state.filteredOffers, state.sorting);
    })
    .addCase(offersLoaded, (state, action) => {
      state.loadedOffers = action.payload;

      state.filteredOffers = getFilteredOffers(state.loadedOffers, state.cityName);
      state.sortedOffers = getSortedOffers(state.filteredOffers, state.sorting);
    })
    .addCase(reviewsLoaded, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sorting = action.payload;

      state.sortedOffers = getSortedOffers(state.filteredOffers, state.sorting);
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoadingInProgress = action.payload;
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.isReviewsLoadingInProgress = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
      saveToken(state.user.token ?? '');
    });
});

export {reducer};
