import './pre-start'; // Must be the first import
import logger from 'jet-logger';

import EnvVars from '@src/common/EnvVars';
import server from './server';
import { connectDB } from './config/database';


// **** Run **** //

const SERVER_START_MSG = ('Express server started on port: ' + 
  EnvVars.Port.toString());

  connectDB().then(()=> {
    server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
  }).catch(error => logger.err(error))


