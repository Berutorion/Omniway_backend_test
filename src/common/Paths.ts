/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  Users: {
    Base: '/users',
    Get: '/all',
    Add: '/register',
    Update: '/update',
    ChangePassword:'/change-password',
    Delete: '/delete/:id',
  },
  Auth :{
    Base:'/',
    Login:'/login',
    ValidRefreshToken:'/validate-refresh-token',
    ValidJWT:'/dummy-data'
  }
} as const;
