import { BookRepository } from "../../../repositories/implements/BookRepository";
import { updateBookController } from "./updateBookController";
import { updateBookUseCase } from "./updateBookUseCase";

const bookRepository = new BookRepository();

const UpdateBookUseCase = new updateBookUseCase(bookRepository);

const UpdateBookController = new updateBookController(UpdateBookUseCase);

export { UpdateBookController, UpdateBookUseCase };
