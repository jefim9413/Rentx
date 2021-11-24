/* eslint-disable max-len */
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }
  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, '38b50437cb37dd2c85ab51bfa8fea609') as IPayload;
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(sub);
    if (!user) {
      throw new AppError('User does not exist!', 401);
    }
    request.user = {
      id: sub,
    };
    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}
