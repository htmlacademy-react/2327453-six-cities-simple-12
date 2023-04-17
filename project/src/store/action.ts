import {createAction} from '@reduxjs/toolkit';
import {Offers} from "../types/offer";
import {Reviews} from "../types/review";

export const changeCity = createAction<string>('changeCity');
export const getOffers = createAction<Offers>('getOffers');
export const sortOffers = createAction<string>('sortOffers');
export const getReviews = createAction<Reviews>('getReviews');
