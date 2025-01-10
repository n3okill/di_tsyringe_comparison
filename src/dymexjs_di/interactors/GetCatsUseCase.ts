import { Singleton } from "@dymexjs/di";
import { Either, left, right, UseCase } from "../domain/helpers.js";
import { CatsRepository } from "../domain/repositories/CatsRepository.js";

@Singleton([CatsRepository])
export class GetCatsUseCase implements UseCase {
  constructor(private catsRepository: CatsRepository) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async execute(): Promise<Either<Error, any>> {
    const cats = this.catsRepository.getCats();
    if (!cats) return left(Error("Error getting cats"));
    return right(cats);
  }
}
