import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../types/countryTypes";

interface CountryState {
  currentCountry: Country | null;
}

const initialState: CountryState = {
  currentCountry: { countryCode: "pl", label: "Poland" },
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCurrentCountry: (state, action: PayloadAction<Country>) => {
      state.currentCountry = action.payload;
    },
  },
});

export const { setCurrentCountry } = countrySlice.actions;

export default countrySlice.reducer;
