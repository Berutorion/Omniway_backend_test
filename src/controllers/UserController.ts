import HttpStatusCodes from '@src/common/HttpStatusCodes';

import UserService from '@src/services/UserService';
import { IUser } from '@src/models/User';
import { IReq, IRes } from './types/express/misc';


interface IPasswordRep {
  user:IUser
  oldPassword:string,
  newPassword: string
}


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq<{user: IUser}>, res: IRes) {
  const users = await UserService.getAll();
   res.status(HttpStatusCodes.OK).json({ users });
}

/**
 * Add one user.
 */
async function add(req: IReq<IUser>, res: IRes) {
 const { username, password, avatar } = req.body;
  await UserService.addOne({username,password,avatar,isActive:true} as IUser);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq<{user: IUser}>, res: IRes) {
  const { user } = req.body;
  await UserService.updateOne(user);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const id = req.params.id;
  await UserService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// change password 

async function chanagePassword(req:IReq<IPasswordRep> , res: IRes) {
  try {
    const {oldPassword, newPassword, user } = req.body
    await UserService.changePassword(oldPassword,newPassword,user.id)

    res.status(200).json({message:"Change success."})
  } catch (error) {
    throw error
  }
 
  
}

// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
  chanagePassword
} as const;
