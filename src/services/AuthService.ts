

import RouteError from '@src/common/RouteError';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import UserService from './UserService';
import { comparePassword } from '@src/util/PwdUtil';
import { generateRefreshToken, generateToken, verifyRefreshToken } from '@src/util/tokenUtil';



async function Login(username:string, password:string) {
    try {
        
    // check if user is exist
    const user  = await UserService.getOne(username)

    // chech password 
    const isMatch = await comparePassword(password,user.password)
    if(!isMatch){
      throw new RouteError(HttpStatusCodes.NO_CONTENT,"UserName or Password is wrong.")
    }

    
    const token = generateToken({userId:user.id})
    const refreshsToken = generateRefreshToken({userId:user.id})

    return {token,refreshsToken}
    } catch (error) {
       throw error
    }
}

async function validateRefreshToken (refreshToken:string) {
  try {
    // verify and decode token 
    const decode = verifyRefreshToken(refreshToken)

    // check user is exist 
    await UserService.getOneById(decode.userId)

    // generate new JWT
    return generateToken({userId: decode.userId})
  } catch (error) {
    throw error
  }
}

export default {
    Login,
    validateRefreshToken
} as const