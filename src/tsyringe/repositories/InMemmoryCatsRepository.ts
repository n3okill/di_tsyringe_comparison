import { Cat } from "../domain/entities/Cat.ts";
import { CatsRepository } from "../../tsyringe/domain/repositories/CatsRepository.ts";
import { injectable } from "tsyringe";

@injectable()
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
