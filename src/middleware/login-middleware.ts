import { NextFunction, Request, Response } from "express";
import Joi from 'joi'

export default async (req: Request, res: Response, next: NextFunction) => {

    const validate = Joi.object({
        username: Joi.string()
            .empty()
            .trim()
        ,
        email: Joi.string()
            .empty()
            .trim()
            .email()
        ,
        password: Joi.string()
            .required()
            .empty()
            .trim()
    }) 

    try {
        await validate.validateAsync(req.body, {
            abortEarly: false
        })
    } catch (err: any) {
        return res.status(400).json({
            status_code: 400,
            result: 'bad response',
            message: err.message
        })
    }

    return next()

}