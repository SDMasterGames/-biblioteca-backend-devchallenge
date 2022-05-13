import { Book } from "../entities/Book";
import { IBookRepository } from "../repositories/IBookRepository";

export const bookTest = new Book({
  authors: ["test"],
  cover_url: "https://github.com/SDMasterGames.png",
  id: 1,
  publisher: "test",
  title: "test",
});

export class BookTestRepository implements IBookRepository {
  async getAllBooks(): Promise<Book[]> {
    return [bookTest];
  }
  async createBook(data: Omit<Book, "id">): Promise<Book> {
    return { id: 1, ...data };
  }
  async getById(id: number): Promise<Book | null> {
    if (bookTest.id == id) {
      return bookTest;
    }
    return null;
  }
  async deleteById(id: number): Promise<void> {
    if (bookTest.id == id) {
      return Promise.resolve();
    }
    return Promise.reject("Book not found");
  }

  async findByIdAndUpdate(data: Book): Promise<Book> {
    if (bookTest.id == data.id) {
      return { ...bookTest, ...data };
    }
    return Promise.reject("Book not found");
  }
}
