import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import countryReducer from "./slices/countrySlice";
import viewReducer from "./slices/viewSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    country: countryReducer,
    view: viewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
