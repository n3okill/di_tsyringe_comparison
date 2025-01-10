import { Cat } from "../domain/entities/Cat.js";
import { CatsRepository } from "../domain/repositories/CatsRepository.js";
import { Singleton } from "@dymexjs/di";

@Singleton()
export class InMemmoryCatsRepository implements CatsRepository {
  async getCats(): Promise<Array<Cat> | undefined> {
    return [
      {
        name: "cat1",
        breedName: "Persa",
      },
      {
        name: "cat1",
        breedName: "Sphynx",
      },
    ];
  }
}
