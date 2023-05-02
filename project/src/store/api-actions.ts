
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {
  reviewsLoaded,
  offersLoaded,
  setOffersLoadingStatus,
  setError,
  setReviewsLoadingStatus,
  setAuthorizationStatus
} from './action';
import {Offers} from '../types/offer';
import {APIRoute, TIMEOUT_SHOW_ERROR} from '../const';
import {Reviews} from '../types/review';
import {store} from './index';
import {User} from '../types/user';

export const loadOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(offersLoaded(data));
  },
);

export const loadReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadingStatus(true));
    const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
    dispatch(setReviewsLoadingStatus(false));
    dispatch(reviewsLoaded(data));
  },
);

export const getLogin = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getLogin',
  async (_arg, { dispatch, extra: api }) => {
    const { data} = await api.get<User>(APIRoute.Login);
    dispatch(setAuthorizationStatus(true));
    return data;
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
