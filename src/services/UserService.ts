import RouteError from '@src/common/RouteError';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import UserRepo from '@src/repos/UserRepo';
import { IUser } from '@src/models/User';
import { comparePassword } from '@src/util/PwdUtil';


// **** Variables **** //

export const USER_NOT_FOUND_ERR = 'User not found';


// **** Functions **** //

/**
 * Get all users.
 */
function getAll(): Promise<IUser[]> {
  return UserRepo.getAll();
}

/**
 * Get one users.
 */
async function  getOne(username:string): Promise<IUser>  {
  const user = await UserRepo.getOne(username)
  if(user === null){
    throw new RouteError(
      HttpStatusCodes.NO_CONTENT,
      USER_NOT_FOUND_ERR
    )
  }

  return user
}

/**
 * Get one users by id.
 */
async function  getOneById(id:string): Promise<IUser>  {
  const user = await UserRepo.getOneById(id)
  if(user === null){
    throw new RouteError(
      HttpStatusCodes.NO_CONTENT,
      USER_NOT_FOUND_ERR
    )
  }

  return user

}


/**
 * Add one user.
 */
function addOne(user: IUser): Promise<void> {
  return UserRepo.add(user);
}

/**
 * Update one user.
 */
async function updateOne(user: IUser): Promise<void> {
  const persists = await UserRepo.persists(user.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  // Return user
  return UserRepo.update(user);
}

/**
 * Delete a user by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await UserRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  // Delete user
  return UserRepo.delete(id);
}

// change password 
async function changePassword (oldPassword: string, newPassword:string, userId:string){
  const user = await UserRepo.getOneById(userId)
  if(!user) throw new RouteError(HttpStatusCodes.NOT_FOUND, USER_NOT_FOUND_ERR)
  const isMatch = comparePassword(oldPassword, user?.password)
  if(!isMatch) throw new RouteError(HttpStatusCodes.BAD_REQUEST, "Please enter the current password correctly")
  await UserRepo.update({...user.toJSON(), password:newPassword})
}


// **** Export default **** //

export default {
  getAll,
  getOne,
  getOneById,
  addOne,
  updateOne,
  delete: _delete,
  changePassword
} as const;
