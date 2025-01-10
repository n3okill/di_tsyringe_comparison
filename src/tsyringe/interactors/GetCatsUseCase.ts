import { Either, left, right, UseCase } from "../domain/helpers.ts";
import { type CatsRepository, CatsRepositoryToken } from "../domain/repositories/CatsRepository.ts";
import { injectable, inject } from "tsyringe";

@injectable()
export class GetCatsUseCase implements UseCase {
  constructor(@inject(CatsRepositoryToken) private catsRepository: CatsRepository) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async execute(): Promise<Either<Error, any>> {
    const cats = this.catsRepository.getCats();
    if (!cats) return left(Error("Error getting cats"));
    return right(cats);
  }
}
