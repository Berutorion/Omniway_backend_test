/**
 * Environments variables declared here.
 */

/* eslint-disable node/no-process-env */


export default {
  NodeEnv: (process.env.NODE_ENV ?? ''),
  Port: (process.env.PORT ?? 0),
  Jwt: {
    Secret: (process.env.JWT_SECRET ??  ''),
    Exp: (process.env.JWT_EXPIRATION ?? ''), 
    ReFreshExp : (process.env.REFRESH_TOKEN_EXPIRATION ?? ''), 
  },
  DatabaseURL :( process.env.DataBase_URL ?? '')
} as const;
