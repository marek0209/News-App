import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import countryReducer from "./slices/countrySlice";
export const store = configureStore({
  reducer: {
    news: newsReducer,
    country: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
