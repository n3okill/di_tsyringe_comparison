import { container } from "@dymexjs/di";
import { CatsController } from "./controllers/CatsController.ts";
import { CatsRepository } from "./domain/repositories/CatsRepository.ts";
import { FileCatsRepository } from "./repositories/FileCatsRepository.ts";
//import { InMemmoryCatsRepository } from "./repositories/InMemmoryCatsRepository.ts";

container.registerSingleton(CatsRepository, FileCatsRepository);
//container.registerSingleton(CatsRepository, InMemmoryCatsRepository);

const catsController = container.resolve<CatsController>(CatsController);

export async function startDI() {
  const cats = await catsController.getCats();

  console.log(cats);
}

console.log("@Dymexjs/DI");
startDI();
