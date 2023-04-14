import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('changeCity');
export const getOffers = createAction('getOffers');
export const sortOffers = createAction<string>('sortOffers');
