import { BookRepository } from "../../../repositories/implements/BookRepository";
import { createBookController } from "./createBookController";
import { createBookUseCase } from "./createBookUseCase";

const bookRepository = new BookRepository();

const CreateBookUseCase = new createBookUseCase(bookRepository);

const CreateBookController = new createBookController(CreateBookUseCase);

export { CreateBookController, CreateBookUseCase };
