import "reflect-metadata";
import { container } from "tsyringe";
import { CatsController } from "./controllers/CatsController.ts";
import { CatsRepository, CatsRepositoryToken } from "./domain/repositories/CatsRepository.ts";
import { FileCatsRepository } from "./repositories/FileCatsRepository.ts";
import { GetCatsUseCase } from "./interactors/GetCatsUseCase.ts";
//import { InMemmoryCatsRepository } from "./repositories/InMemmoryCatsRepository.ts";

container.registerSingleton<CatsRepository>(CatsRepositoryToken, FileCatsRepository);
//container.registerSingleton<CatsRepository>(CatsRepositoryToken, InMemmoryCatsRepository);
container.register(GetCatsUseCase, GetCatsUseCase);
container.register(CatsController, CatsController);

const catsController = container.resolve<CatsController>(CatsController);

export async function startTsyringe() {
  const cats = await catsController.getCats();

  console.log(cats);
}

console.log("Tsyringe");
await startTsyringe();
