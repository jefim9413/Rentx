import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  private spicicationsRepository: ISpecificationsRepository;

  constructor(spicicationsRepository: ISpecificationsRepository) {
    this.spicicationsRepository = spicicationsRepository;
  }

  execute({ name, description } : IRequest) : void {
    this.spicicationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
