import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  // eslint-disable-next-line no-unused-vars
  findByName(name: string): Category;
  list() : Category[];
  // eslint-disable-next-line no-unused-vars
  create({ name, description }: ICreateCategoryDTO): void;

}
export { ICategoriesRepository, ICreateCategoryDTO };
