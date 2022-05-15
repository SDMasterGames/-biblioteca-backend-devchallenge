import { BookRepository } from "../../../repositories/implements/BookRepository";
import { getBooksController } from "./getBooksController";
import { getBooksUseCase } from "./getBooksUseCase";

const bookRepository = new BookRepository();

const GetBooksUseCase = new getBooksUseCase(bookRepository);

const GetBooksControllers = new getBooksController(GetBooksUseCase);

export { GetBooksControllers, GetBooksUseCase };
