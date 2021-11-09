import { Specification } from '../entities/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  // eslint-disable-next-line no-unused-vars
  create({ name, description }: ICreateSpecificationDTO): void;
  // eslint-disable-next-line no-unused-vars
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
