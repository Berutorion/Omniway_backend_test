
import { Router } from 'express';
import Paths from '../common/Paths';
import UserController from '@src/controllers/UserController';
import { authMiddleware } from '@src/middlewares/authmiddleware';

const router = Router()

// register user

router.post(Paths.Users.Add, UserController.add)

// chanage password 

router.post(Paths.Users.ChangePassword, authMiddleware, UserController.chanagePassword)

export default router