import { IBookRepository } from "../../../repositories/IBookRepository";
import { IUpdateBookRequestDTO } from "./updateBookDTO";

export class updateBookUseCase {
  constructor(private bookRepository: IBookRepository) {}

  async execute({
    id,
    authors,
    cover_url,
    publisher,
    title,
  }: IUpdateBookRequestDTO) {
    const numberId = Number(id);
    if (!numberId) {
      throw new Error("required id");
    }

    if (!authors && !cover_url && !publisher && !title) {
      throw new Error("required at least one field");
    }

    const findBook = await this.bookRepository.getById(numberId);

    if (!findBook) {
      throw new Error("Book not found");
    }

    if (cover_url) {
      findBook.cover_url = cover_url;
    }

    if (publisher) {
      findBook.publisher = publisher;
    }

    if (title) {
      findBook.title = title;
    }

    if (authors) {
      if (Array.isArray(authors)) {
        findBook.authors = authors;
      } else if (!findBook.authors.includes(authors)) {
        findBook.authors.push(authors);
      } else {
        throw new Error("Author already exists");
      }
    }

    const book = await this.bookRepository.findByIdAndUpdate(
      numberId,
      findBook
    );
    return book;
  }
}
