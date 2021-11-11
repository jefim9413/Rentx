import { inject, injectable } from 'tsyringe';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(@inject('SpecificationsRepository') private specicationsRepository: ISpecificationsRepository) {
    this.specicationsRepository = specicationsRepository;
  }

  async execute({ name, description } : IRequest) : Promise<void> {
    const specificationAlreadyExists = await this.specicationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }
    await this.specicationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
