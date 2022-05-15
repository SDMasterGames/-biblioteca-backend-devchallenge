import { createBookUseCase } from "../modules/Book/createBook/createBookUseCase";
import { getBooksUseCase } from "../modules/Book/getBooks/getBooksUseCase";
import { BookTestRepository, bookTest } from "./BookTestRepository";

const bookTestRepo = new BookTestRepository();

const createBook = new createBookUseCase(bookTestRepo);
const getBooks = new getBooksUseCase(bookTestRepo);

describe("Module - Book", () => {
  describe("Create Book", () => {
    it("should create a book", async () => {
      await expect(createBook.execute({ ...bookTest })).resolves.not.toThrow();
    });

    it("should fail if title is missing", async () => {
      await expect(
        createBook.execute({
          ...bookTest,
          title: "",
        })
      ).rejects.toThrow();
    });

    it("should fail if publisher is missing", async () => {
      await expect(
        createBook.execute({
          ...bookTest,
          publisher: "",
        })
      ).rejects.toThrow();
    });

    it("should fail if cover_url is missing", async () => {
      await expect(
        createBook.execute({
          ...bookTest,
          cover_url: "",
        })
      ).rejects.toThrow();
    });

    it("should fail if authors is missing", async () => {
      await expect(
        createBook.execute({
          ...bookTest,
          authors: [],
        })
      ).rejects.toThrow();
    });
  });

  describe("Get Books", () => {
    it("should get all books", async () => {
      await expect(getBooks.execute()).resolves.not.toThrow();
    });
  });
});
