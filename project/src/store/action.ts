import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';
import {Reviews} from '../types/review';

export const changeCity = createAction<string>('changeCity');
export const offersLoaded = createAction<Offers>('offersLoaded');
export const sortOffers = createAction<string>('sortOffers');
export const reviewsLoaded = createAction<Reviews>('reviewsLoaded');
export const setError = createAction<string | null>('setError');
export const setLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
