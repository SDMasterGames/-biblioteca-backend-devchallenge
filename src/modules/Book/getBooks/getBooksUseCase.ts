import { Book } from "../../../entities/Book";
import { IBookRepository } from "../../../repositories/IBookRepository";

export class getBooksUseCase {
  constructor(private IBookRepository: IBookRepository) {}

  async execute(): Promise<Book[]> {
    return await this.IBookRepository.getAllBooks();
  }
}