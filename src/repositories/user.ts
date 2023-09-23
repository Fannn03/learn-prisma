import { PrismaClient } from "@prisma/client";
import { UserRegister } from "../services/auth/register";

const prisma = new PrismaClient()

export interface User {
    id: number
    uuid: string,
    username: string,
    email: string,
    level: string,
    created_at: Date,
    updated_at: Date,
    is_deleted: Boolean
}

export const insertUser = async (request: UserRegister) => {
    
    let user: User

    try {
        user = await prisma.user.create({
            data: {
                username: request.username,
                email: request.email,
                password: request.password
            }
        })
    } catch (err: any) {
        throw err
    }

    return user

}