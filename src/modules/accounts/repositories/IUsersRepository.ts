/* eslint-disable no-unused-vars */

import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

interface IUsersRepository {
  create(data: ICreateUserDTO) : Promise<void>;
}

export { IUsersRepository };
