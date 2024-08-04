
import { Router } from 'express';
import Paths from '../common/Paths';
import UserController from '@src/controllers/UserController';
import { authMiddleware } from '@src/middlewares/authmiddleware';

const router = Router()

// chanage password 

router.post(Paths.Users.ChangePassword, authMiddleware, UserController.chanagePassword)

export default router