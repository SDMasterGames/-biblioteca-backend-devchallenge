import { prisma } from "../../database/prisma";
import { Book } from "../../entities/Book";
import { IBookRepository } from "../IBookRepository";

export class BookRepository implements IBookRepository {
  async getAllBooks(): Promise<Book[]> {
    const books = await prisma.book.findMany();
    return books;
  }

  async getById(id: number): Promise<Book | null> {
    const book = await prisma.book.findFirst({
      where: {
        id,
      },
    });
    return book;
  }
  async createBook(book: Omit<Book, "id">): Promise<Book> {
    const result = await prisma.book.create({
      data: book,
    });
    return result;
  }
  async deleteById(id: number): Promise<void> {
    await prisma.book.delete({
      where: {
        id,
      },
    });
  }

  async findByIdAndUpdate(id: number, data: Book): Promise<Book> {
    const result = await prisma.book.update({
      where: {
        id,
      },
      data,
    });
    return result;
  }
}
