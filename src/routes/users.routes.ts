import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const usersRouter = Router();

const upload = multer({
  dest: './avatar',
});
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRouter.post('/', createUserController.handle);

usersRouter.patch('/avatar', upload.single('file'), updateUserAvatarController.handle);

export { usersRouter };
