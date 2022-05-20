import { Request, Response } from "express";
import { updateBookUseCase } from "./updateBookUseCase";

export class updateBookController {
  constructor(private useCase: updateBookUseCase) {}
  async handle(req: Request, res: Response) {
    try {
      const { id, authors, cover_url, publisher, title } = req.body;
      const response = await this.useCase.execute({
        id,
        authors,
        cover_url,
        publisher,
        title,
      });
      return res.status(200).send(response);
    } catch (error: any) {
      return res.status(400).send({
        error: error.message || "Unexpected error while updating book",
      });
    }
  }
}
