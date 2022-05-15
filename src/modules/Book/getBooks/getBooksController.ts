import { Request, Response } from "express";
import { getBooksUseCase } from "./getBooksUseCase";

export class getBooksController {
  constructor(private useCase: getBooksUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const books = await this.useCase.execute();
      return res.status(200).send(books);
    } catch (error: any) {
      return res.status(400).send({
        error: error.message || "Unexpected error while getting books",
      });
    }
  }
}
