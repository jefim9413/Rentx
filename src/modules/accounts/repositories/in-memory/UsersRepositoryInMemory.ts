/* eslint-disable camelcase */
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    driver_license, email, name, password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();
    Object.assign(user, {
      driver_license,
      email,
      name,
      password,
    });

    this.users.push(user);
  }

  findByEmail(email: string): Promise<User> {
    const 
  }

  findById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

export { UsersRepositoryInMemory };
