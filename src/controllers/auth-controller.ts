import { Request, Response } from "express"
import { userRegister } from "../services/auth/register"
import { Prisma } from "@prisma/client";
import { userLogin } from "../services/auth/login";

export const register = async (req: Request, res: Response) => {

    const user = await userRegister(req.body)
    
    if(user instanceof Prisma.PrismaClientKnownRequestError) return res.status(400).json({
        status_code: 400,
        result: 'bad request',
        error: {
            path: user?.meta?.target,
            message: user.message
        }
    })

    return res.json({
        status_code: 200,
        result: 'success',
        message: 'record has been created'
    })

}

export const login = async (req: Request, res: Response) => {

    const user = await userLogin(req.body)

    if(!user) return res.status(400).json({
        status_code: 400,
        result: 'bad response',
        message: 'failed to retrieve user data'
    })
    
    return res.json({
        status_code: 200,
        result: 'success',
        message: 'successfully login',
        data: user
    })
    
}