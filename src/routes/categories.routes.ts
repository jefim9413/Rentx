import { Router } from 'express';
import multer from 'multer';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesUseCase = new ListCategoriesController();
categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', listCategoriesUseCase.handle);
categoriesRoutes.post('/import', upload.single('file'), importCategoryController.handle);
export { categoriesRoutes };
