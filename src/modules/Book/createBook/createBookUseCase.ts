import { IBookRepository } from "../../../repositories/IBookRepository";
import { ICreateBookRequestDTO } from "./createBookDTO";

export class createBookUseCase {
  constructor(private bookRepository: IBookRepository) {}

  async execute(data: ICreateBookRequestDTO) {
    const { authors, cover_url, publisher, title } = data;
    if (!authors || !cover_url || !publisher || !title) {
      throw new Error("Missing required fields");
    }

    const book = await this.bookRepository.createBook({
      authors,
      cover_url,
      publisher,
      title,
    });
    return book;
  }
}
