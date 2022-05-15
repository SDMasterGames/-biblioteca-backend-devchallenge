import { Request, Response } from "express";
import { deleteBookUseCase } from "./deleteBookUseCase";

export class deleteBookController {
  constructor(private useCase: deleteBookUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await this.useCase.execute(id);
      return res.status(200).send(result);
    } catch (error: any) {
      return res.status(400).send({
        error: error.message || "Unexpected error while deleting book",
      });
    }
  }
}
