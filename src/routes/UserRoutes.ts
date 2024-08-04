
import { Router } from 'express';
import Paths from '../common/Paths';
import UserController from '@src/controllers/UserController';
import { authMiddleware } from '@src/middlewares/authmiddleware';
import uploadAvatar from '@src/middlewares/uploadAvatar';

const router = Router()

// register user

router.post(Paths.Users.Add,uploadAvatar, UserController.add)

// chanage password 

router.post(Paths.Users.ChangePassword, authMiddleware, UserController.chanagePassword)

// valid JWt 

router.get(Paths.Users.ValidJWT, authMiddleware, UserController.getAll)

export default router