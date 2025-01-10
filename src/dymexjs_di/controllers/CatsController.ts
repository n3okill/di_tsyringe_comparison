import { Transient } from "@dymexjs/di";
import { GetCatsUseCase } from "../interactors/GetCatsUseCase.js";

@Transient([GetCatsUseCase])
export class CatsController {
  constructor(private getCatsUseCase: GetCatsUseCase) {}
  async getCats(): Promise<Array<string>> {
    const cats = await this.getCatsUseCase.execute();

    if (cats.isLeft()) throw cats.value;
    return cats.value;
  }
}
