
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import { IUser } from '@src/models/User';
import { IReq, IRes } from './types/express/misc';
import AuthService from '@src/services/AuthService';


interface ILoginReq {
    username: string,
    password: string
}

// login 

async function Login(req: IReq<ILoginReq>, res: IRes) {
    try {
        const {username, password} = req.body
        await AuthService.Login(username,password)
        return res.status(HttpStatusCodes.OK).json({
            JWT:"",
            refreshsToken : ""
        })
    } catch (error) {
       throw error
    }

}

export default {
    Login
} as const