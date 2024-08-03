import { Router } from 'express';
import Paths from '../common/Paths';
import UserRoutes from './UserRoutes';


// **** Variables **** //

const apiRouter = Router()

// Add UserRouter
apiRouter.use(Paths.Users.Base, UserRoutes);


// **** Export default **** //

export default apiRouter;
