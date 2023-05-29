import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CatRequestModel, CatsResponseModel } from "../types/Cat";
import { CategoriesResponseModel } from "../types/Categories";

export const catsApi = createApi({
  reducerPath: "catsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.thecatapi.com/v1/" }),
  endpoints: (builder) => ({
    getCats: builder.query<CatsResponseModel, CatRequestModel>({
      query: ({ categoryId, page }) =>
        categoryId
          ? `images/search?limit=10&page=${page}&category_ids=${categoryId}`
          : `images/search?limit=10&page=${page}`,
    }),
    getCatsCategories: builder.query<CategoriesResponseModel, null>({
      query: () => "categories",
    }),
  }),
});

export const {
  useGetCatsQuery,
  useGetCatsCategoriesQuery,
  useLazyGetCatsQuery,
} = catsApi;
