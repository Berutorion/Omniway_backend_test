/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  Users: {
    Base: '/users',
    Add: '/register',
    ChangePassword:'/change-password',
    ValidJWT:'/dummy-data'
  },
  Auth :{
    Base:'/',
    Login:'/login',
    ValidRefreshToken:'/validate-refresh-token',
  }
} as const;
