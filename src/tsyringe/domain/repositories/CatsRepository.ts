import { Cat } from "../entities/Cat.ts";

export interface CatsRepository {
  getCats(): Promise<Array<Cat> | undefined>;
}

export const CatsRepositoryToken = Symbol("CatsRepository");
