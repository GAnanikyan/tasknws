import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PrimaryKey } from "../../types/PrimaryKey";

interface CategoryState {
  currentCategory: PrimaryKey | null;
}

const initialState: CategoryState = {
  currentCategory: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCurrentCategory: (state, action: PayloadAction<PrimaryKey>) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { setCurrentCategory } = categorySlice.actions;

export default categorySlice.reducer;
