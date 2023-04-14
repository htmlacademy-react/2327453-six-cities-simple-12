import {offers} from '../mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers, sortOffers} from './action';
import {Sorting} from '../types/sorting';
import {Offers} from '../types/offer';

const defaultCity = 'Paris';

type state = {
  cityName: string;
  offers: Offers;
  sorting: string;
}

const initialState: state = {
  cityName: defaultCity,
  offers: offers.filter((o) => o.city.name === defaultCity),
  sorting: Sorting.popular
};

function getFilteredOffersByCity(cityName: string): Offers {
  return offers.filter((o) => o.city.name === cityName);
}

function sortOffersBySortingTypeOrDefault(sorting: string, currentOffers: Offers, cityName: string) {
  switch(sorting)
  {
    case Sorting.priceLowToHigh:
      return currentOffers.sort((a,b) => a.price - b.price);
    case Sorting.priceHighToLow:
      return currentOffers.sort((a,b) => b.price - a.price);
    case Sorting.topRatedFirst:
      return currentOffers.sort((a,b) => b.rating - a.rating);
    default:
      return getFilteredOffersByCity(cityName);
  }
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
      state.offers = sortOffersBySortingTypeOrDefault(state.sorting, state.offers, state.cityName);
    })
    .addCase(getOffers, (state) => {
      state.offers = getFilteredOffersByCity(state.cityName);
      state.offers = sortOffersBySortingTypeOrDefault(state.sorting, state.offers, state.cityName);
    })
    .addCase(sortOffers, (state, action) => {
      state.sorting = action.payload;

      state.offers = sortOffersBySortingTypeOrDefault(state.sorting, state.offers, state.cityName);
    });
});

export {reducer};
