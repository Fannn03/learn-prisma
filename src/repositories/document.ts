import { PrismaClient } from "@prisma/client"
import { User } from "./user"

const prisma = new PrismaClient()

export const insertDocument = async (user: User) => {

    try {
        await prisma.document.create({
            data: {
                user_id: user.id as number,
                fullname: user.username
            }
        })
    } catch (err: any) {
        throw err
    }

    return true

}