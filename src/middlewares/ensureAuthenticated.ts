import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing');
  }
  const [, token] = authHeader.split(' ');

  try {
    verify(token, '38b50437cb37dd2c85ab51bfa8fea609');
    next();
  } catch {
    throw new Error('Invalid token');
  }
}
