import { injectable } from "tsyringe";
import { Cat } from "../domain/entities/Cat.ts";
import { CatsRepository } from "../../tsyringe/domain/repositories/CatsRepository.ts";

@injectable()
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
