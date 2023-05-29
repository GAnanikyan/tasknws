import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatsResponseModel } from "../../types/Cat";

interface PageState {
  currentPage: CatsResponseModel;
}

const initialState: PageState = {
  currentPage: [],
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<CatsResponseModel>) => {
      state.currentPage = state.currentPage.concat(action.payload);
    },
    setCurrentPageEmpty: (state) => {
      state.currentPage = [];
    },
  },
});

export const { setCurrentPage, setCurrentPageEmpty } = pageSlice.actions;

export default pageSlice.reducer;
