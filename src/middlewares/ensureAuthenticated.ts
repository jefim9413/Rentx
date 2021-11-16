/* eslint-disable max-len */
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing');
  }
  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, '38b50437cb37dd2c85ab51bfa8fea609') as IPayload;
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(sub);
    if (!user) {
      throw new Error('User does not exist!');
    }
    next();
  } catch {
    throw new Error('Invalid token');
  }
}
