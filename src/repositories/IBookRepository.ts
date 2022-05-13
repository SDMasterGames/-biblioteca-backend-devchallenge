import { Book } from "../entities/Book";

export interface IBookRepository {
  getAllBooks(): Promise<Book[]>;
  getById(id: number): Promise<Book | null>;
  createBook(book: Omit<Book, "id">): Promise<Book>;
  findByIdAndUpdate(book: Book): Promise<Book>;
  deleteById(id: number): Promise<void>;
}
