

import RouteError from '@src/common/RouteError';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import UserService from './UserService';
import { comparePassword } from '@src/util/PwdUtil';
import { generateRefreshToken, generateToken } from '@src/util/tokenUtil';



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

export default {
    Login
} as const