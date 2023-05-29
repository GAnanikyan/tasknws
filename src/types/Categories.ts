import { PrimaryKey } from "./PrimaryKey";

export interface CategoriesModel {
  id: PrimaryKey;
  name: string;
}

export type CategoriesResponseModel = CategoriesModel[];
