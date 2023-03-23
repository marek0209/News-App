import { createSlice } from "@reduxjs/toolkit";

export enum ViewType {
  Grid = "grid",
  List = "list",
}

interface ViewState {
  view: ViewType;
}

const initialState: ViewState = {
  view: ViewType.Grid,
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    switchView(state) {
      state.view = state.view === ViewType.Grid ? ViewType.List : ViewType.Grid;
    },
  },
});

export const { switchView } = viewSlice.actions;
export default viewSlice.reducer;
