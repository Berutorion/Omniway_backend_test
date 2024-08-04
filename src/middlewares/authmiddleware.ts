import { Response, NextFunction } from 'express';
import { verifyToken } from '@src/util/tokenUtil';
import { IReq } from '@src/controllers/types/types';
import { IUser } from '@src/models/User';
import UserService from '@src/services/UserService';

export const authMiddleware = async(req: IReq<{user:IUser}>, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  req.body.user = await UserService.getOneById(decoded.userId)


  next();
};
