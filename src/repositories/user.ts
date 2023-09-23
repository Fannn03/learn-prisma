import { PrismaClient } from "@prisma/client";
import { RequestBody } from "../services/auth/register";

const prisma = new PrismaClient()

export const insertUser = async (request: RequestBody) => {
    
    try {
        await prisma.user.create({
            data: {
                username: request.username,
                email: request.email,
                password: request.password
            }
        })
    } catch (err: any) {
        return err
    }

}

export default {
    insertUser
}