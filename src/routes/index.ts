import { Router } from 'express';
import Paths from '../common/Paths';
import UserRoutes from './UserRoutes';
import AuthRoutes from './AuthRoutes'

// **** Variables **** //

const apiRouter = Router()

// Add UserRouter
apiRouter.use(Paths.Users.Base, UserRoutes);

// Add AuthRoter
apiRouter.use(Paths.Auth.Base,AuthRoutes)
// **** Export default **** //

export default apiRouter;
