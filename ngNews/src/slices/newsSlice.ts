import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { getNews } from "../services/newsApi";
import { News } from "../types/newsTypes";
import { Country } from "../types/countryTypes";

interface NewsState {
  news: News[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNewsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getNewsSuccess(state, action: PayloadAction<News[]>) {
      state.news = action.payload;
      state.loading = false;
    },
    getNewsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getNewsStart, getNewsSuccess, getNewsFailure } =
  newsSlice.actions;

export default newsSlice.reducer;

export const fetchNews =
  (country: Country): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getNewsStart());
      const response = await getNews(country.countryCode);
      dispatch(getNewsSuccess(response));
    } catch (error: any) {
      dispatch(getNewsFailure(error.message));
    }
  };
