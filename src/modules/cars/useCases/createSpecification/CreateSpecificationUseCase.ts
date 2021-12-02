import { inject, injectable } from 'tsyringe';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { AppError } from '@errors/AppError';

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
      throw new AppError('Specification already exists', 401);
    }
    await this.specicationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
