import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, State} from "../types/state";
import {AxiosInstance} from "axios";
import {getOffers} from "./action";
import {api} from "./index";
import {Offers} from "../types/offer";
import {APIRoute} from "../const";

export const loadOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(getOffers(data));
  },
);
