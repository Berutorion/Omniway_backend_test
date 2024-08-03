
import { Router } from 'express';
import Paths from '../common/Paths';
import UserController from '@src/controllers/UserController';

const router = Router()
// Get all users
router.get(
  Paths.Users.Get,
  UserController.getAll,
);

// Add one user
router.post(
  Paths.Users.Add,
  UserController.add,
);

// Update one user
router.put(
  Paths.Users.Update,
  UserController.update,
);

// Delete one user
router.delete(
  Paths.Users.Delete,
  UserController.delete,
);

export default router