import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationUseCase {
  private specicationsRepository: ISpecificationsRepository;

  constructor(specicationsRepository: ISpecificationsRepository) {
    this.specicationsRepository = specicationsRepository;
  }

  execute({ name, description } : IRequest) : void {
    const specificationAlreadyExists = this.specicationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }
    this.specicationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
