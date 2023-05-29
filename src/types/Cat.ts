import { PrimaryKey } from "./PrimaryKey";

interface CatData {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatRequestModel {
  limit: PrimaryKey;
  page: PrimaryKey;
  categoryId: PrimaryKey | null;
}

export type CatsResponseModel = CatData[];
