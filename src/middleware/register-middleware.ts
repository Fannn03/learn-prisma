import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default async (req: Request, res: Response, next: NextFunction) => {

    const validate = Joi.object({
        username: Joi.string()
            .required()
            .empty()
            .trim()
            .min(6)
            .max(32)
            .pattern(/^\S*$/, {name: 'username'})
            .messages({
                'string.pattern.name': 'username cannot contains whitespace'
            })
        ,
        email: Joi.string()
            .required()
            .empty()
            .trim()
            .email()
            .max(100)
        ,
        password: Joi.string()
            .required()
            .empty()
            .trim()
            .min(6)
            .max(24)
            .pattern(/^\S*$/, {name: 'password'})
    })

    try {
        await validate.validateAsync(req.body, {
            abortEarly: false
        })
    } catch (err: any) {
        return res.status(400).json({
            status_code: 400,
            result: 'bad request',
            message: err.message
        })
    }

    return next()

}