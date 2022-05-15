import { IBookRepository } from "../../../repositories/IBookRepository";

export class deleteBookUseCase {
  constructor(private IBookRepository: IBookRepository) {}

  async execute(id?: string) {
    const numberId = Number(id)    
    if (!numberId) {
      throw new Error("Id is required");
    }
    await this.IBookRepository.deleteById(numberId);
    return numberId;
  }
}
