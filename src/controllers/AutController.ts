
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import { IUser } from '@src/models/User';
import { IReq, IRes } from './types/express/misc';
import AuthService from '@src/services/AuthService';
import RouteError from '@src/common/RouteError';


interface ILoginReq {
    username: string,
    password: string
}

interface IRefreshReq {
    refreshToken : string
}

// login 

async function Login(req: IReq<ILoginReq>, res: IRes) {
    try {
        const {username, password} = req.body
        const tokens = await AuthService.Login(username,password)
        return res.status(HttpStatusCodes.OK).json(tokens)
    } catch (error) {
       throw error
    }

}

async function validateRefreshToken(req: IReq<IRefreshReq> , res: IRes) {
    try {
        const {refreshToken} = req.body
        if(!refreshToken) throw new RouteError(HttpStatusCodes.BAD_REQUEST , "Refresh token is required")

       const newToken = await AuthService.validateRefreshToken(refreshToken)    

        res.status(HttpStatusCodes.OK).json({token: newToken})
    } catch (error) {
        throw error
    }
} 

export default {
    Login,
    validateRefreshToken
} as const