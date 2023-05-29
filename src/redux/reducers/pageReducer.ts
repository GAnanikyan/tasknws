import { createSlice } from "@reduxjs/toolkit";

interface PageState {
  currentPage: number;
}

const initialState: PageState = {
  currentPage: 1,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    addCurrentPage: (state) => {
      state.currentPage++;
    },
    setCurrentPageStart: (state) => {
      state.currentPage = 1;
    },
  },
});

export const { setCurrentPageStart, addCurrentPage } = pageSlice.actions;

export default pageSlice.reducer;
