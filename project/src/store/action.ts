import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';
import {Reviews} from '../types/review';
import {User} from '../types/user';

export const changeCity = createAction<string>('changeCity');
export const offersLoaded = createAction<Offers>('offersLoaded');
export const sortOffers = createAction<string>('sortOffers');
export const reviewsLoaded = createAction<Reviews>('reviewsLoaded');
export const setError = createAction<string | null>('setError');
export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
export const setReviewsLoadingStatus = createAction<boolean>('setReviewsLoadingStatus');
export const setAuthorizationStatus = createAction<boolean>('setAuthorizationStatus');
export const setUser = createAction<User>('setUser');
