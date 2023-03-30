import {createAction} from '@reduxjs/toolkit';
import {Review} from "../types/review";

export const changeCity = createAction('changeCity');
export const getOffers = createAction('getOffers');
export const setHoveredCardId = createAction<number | null>('setHoveredCardId');
export const setReview = createAction<Review>('setReview');
