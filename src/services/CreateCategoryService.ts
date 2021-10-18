/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import CategoriesRepository from '../repositories/CategoriesRepository';

interface IRequest {
   name: string;
   description: string;
}

class CreateCategoryService {
  // eslint-disable-next-line no-empty-function
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }:IRequest) :void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category Already exists!');
    }
    this.categoriesRepository.craete({ name, description });
  }
}
export default CreateCategoryService;
