import { createBookUseCase } from "../modules/Book/createBook/createBookUseCase";
import { deleteBookUseCase } from "../modules/Book/deleteBook/deleteBookUseCase";
import { getBooksUseCase } from "../modules/Book/getBooks/getBooksUseCase";
import { updateBookUseCase } from "../modules/Book/updateBook/updateBookUseCase";
import { BookTestRepository, bookTest } from "./BookTestRepository";

const bookTestRepo = new BookTestRepository();

const createBook = new createBookUseCase(bookTestRepo);
const getBooks = new getBooksUseCase(bookTestRepo);
const deleteBook = new deleteBookUseCase(bookTestRepo);
const updateBook = new updateBookUseCase(bookTestRepo);

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

  describe("Delete Book", () => {
    it("should delete book", async () => {
      await expect(deleteBook.execute("1")).resolves.not.toThrow();
    });

    it("should fail if id is missing", async () => {
      await expect(deleteBook.execute("")).rejects.toThrow();
    });

    it("should fail if id is invalid", async () => {
      await expect(deleteBook.execute("a")).rejects.toThrow();
    });
  });

  describe("Update Book", () => {
    it("should update book title", async () => {
      await expect(
        updateBook.execute({
          id: "1",
          title: "test2",
        })
      ).resolves.toHaveProperty("title", "test2");
    });

    it("should update book publisher", async () => {
      await expect(
        updateBook.execute({
          id: "1",
          publisher: "test2",
        })
      ).resolves.toHaveProperty("publisher", "test2");
    });

    it("should update book cover_url", async () => {
      await expect(
        updateBook.execute({
          id: "1",
          cover_url: "img2",
        })
      ).resolves.toHaveProperty("cover_url", "img2");
    });

    it("should not found a book", async () => {
      await expect(
        updateBook.execute({
          id: "2",
          cover_url: "img2",
        })
      ).rejects.toThrow("Book not found");
    });

    it("should update book authors", async () => {
      await expect(
        updateBook.execute({
          id: "1",
          authors: ["test2"],
        })
      ).resolves.toHaveProperty("authors", ["test2"]);

      await expect(
        updateBook.execute({
          id: "1",
          authors: "test3",
        })
      ).resolves.toHaveProperty("authors", ["test2", "test3"]);
    });

    it("should show author already exists", async () => {
      await expect(
        updateBook.execute({
          id: "1",
          authors: "test2",
        })
      ).rejects.toThrow("Author already exists");
    });

    it("should required least one field", async () => {
      await expect(
        updateBook.execute({
          id: "2",
        })
      ).rejects.toThrow("required at least one field");
    });
  });
});
