import { Cat } from "../domain/entities/Cat.js";
import { CatsRepository } from "../domain/repositories/CatsRepository.js";
import { Singleton } from "@dymexjs/di";

@Singleton()
export class FileCatsRepository implements CatsRepository {
  async getCats(): Promise<Array<Cat> | undefined> {
    return [
      {
        name: "cat1 from file",
        breedName: "Persa from file",
      },
      {
        name: "cat2 from file",
        breedName: "Sphynx from file",
      },
    ];
  }
}
