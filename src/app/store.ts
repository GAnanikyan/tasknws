import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { catsApi } from "../api/catsApi";
import categoryReducer from "../redux/reducers/categoryReducer";
import paginationReducer from "../redux/reducers/paginationReducer";
import pageReducer from "../redux/reducers/pageReducer";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    [catsApi.reducerPath]: catsApi.reducer,
    categoryReducer: categoryReducer,
    dataReducer: paginationReducer,
    pageReducer: pageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
