# Backend Development Skill Assessment Project


## Features

- User Registration
- User Login with JWT
- Change Password (authenticated)
- Token Expiration Handling
- Refresh Token Validation
- Dummy Data Endpoint (authenticated)

## Prerequisites

- Node.js (>=8.10.0)
- [MongoDB] (>= 5.0.0)
- npm or yarn

## Setup

1. Clone the repository:
   ```
   git@github.com:Berutorion/Omniway_backend_test.git
   cd Omniway_backend_test
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables:
   - The project uses separate environment files for development and production.
   - These files are located in the `env/` directory.
   - Make sure to review and update both `development.env` and `production.env` files with your specific configurations.

## Environment Variables

The project uses two environment files:

1. `env/development.env` for development environment
2. `env/production.env` for production environment

Each file should contain the following variables:

```
NODE_ENV=[development/production]

# Server
PORT=3000
HOST=localhost

# Database
DataBase_URL=your_database_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=2m
REFRESH_TOKEN_EXPIRATION=5m
```

Make sure to replace the placeholder values with your actual configuration in both files.

## Running the Application

### Development Mode

To run the application in development mode with hot reloading:

```
npm run dev
```

This will use the configurations from `env/development.env`.

### Production Mode

To build and run the application in production mode:

```
npm run build
npm start
```

This will use the configurations from `env/production.env`.

## API Endpoints

- POST `/register` - Register a new user
- POST `/login` - User login
- POST `/change-password` - Change user password (requires authentication)
- POST `/validate-refresh-token` - Validate refresh token and issue new JWT
- GET `/dummy-data` - Get dummy data (requires authentication)


