import { Request, Response } from "express";
import { createBookUseCase } from "./createBookUseCase";

export class createBookController {
  constructor(private useCase: createBookUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { title, authors, cover_url, publisher } = req.body;
      const book = await this.useCase.execute({
        title,
        authors,
        cover_url,
        publisher,
      });
      return res.status(201).send(book);
    } catch (error: any) {
      return res.status(400).send({
        error: error.message || "Unexpected error while creating book",
      });
    }
  }
}
