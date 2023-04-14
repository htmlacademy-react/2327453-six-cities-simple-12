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

function getFilteredOffersByCurrentCity(): Offers {
  return offers.filter((o) => o.city.name === initialState.cityName);
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.cityName = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = getFilteredOffersByCurrentCity();
    })
    .addCase(sortOffers, (state, action) => {
      state.sorting = action.payload;

      switch(state.sorting)
      {
        case Sorting.priceLowToHigh:
          state.offers = state.offers.sort((a,b) => a.price - b.price);
          break;
        case Sorting.priceHighToLow:
          state.offers = state.offers.sort((a,b) => b.price - a.price);
          break;
        case Sorting.topRatedFirst:
          state.offers = state.offers.sort((a,b) => b.rating - a.rating);
          break;
        default:
          state.offers = getFilteredOffersByCurrentCity();
          break;
      }
    });
});

export {reducer};
