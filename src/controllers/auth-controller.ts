import { Request, Response } from "express"
import { userRegister } from "../services/auth/register"
import { Prisma } from "@prisma/client";

export const register = async (req: Request, res: Response) => {

    const data = await userRegister(req.body)
    
    if(data instanceof Prisma.PrismaClientKnownRequestError) return res.status(400).json({
        status_code: 400,
        result: 'bad request',
        error: {
            path: data?.meta?.target,
            message: data.message
        }
    })

    return res.json({
        status_code: 200,
        result: 'success',
        message: 'record has been created'
    })

}

export default {
    register
}