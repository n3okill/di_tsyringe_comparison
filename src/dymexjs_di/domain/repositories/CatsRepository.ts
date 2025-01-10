import { getInterfaceToken, InterfaceId } from "@dymexjs/di";
import { Cat } from "../../domain/entities/Cat.js";

export interface CatsRepository {
  getCats(): Promise<Array<Cat> | undefined>;
}

export const CatsRepository: InterfaceId = getInterfaceToken<CatsRepository>("CatsRepository");
