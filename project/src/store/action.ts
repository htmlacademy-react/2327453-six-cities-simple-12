import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('changeCity');
export const getOffers = createAction('getOffers');
export const setHoveredCardId = createAction<number | null>('setHoveredCardId');
