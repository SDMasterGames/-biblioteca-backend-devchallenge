import { Book } from "../entities/Book";

export interface IBookRepository {
  getAllBooks(): Promise<Book[]>;
  getById(id: number): Promise<Book | null>;
  createBook(book: Omit<Book, "id">): Promise<Book>;
  findByIdAndUpdate(id: number, book: Omit<Book, "id">): Promise<Book>;
  deleteById(id: number): Promise<void>;
}
