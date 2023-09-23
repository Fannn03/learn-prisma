import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { getuser } from "../../repositories/user"

export interface UserLogin {
    username?: string | undefined,
    email?: string | undefined,
    password: string
}

export const userLogin = async (request: UserLogin) => {

    const user = await getuser(request)
    if(!user) return null

    const validatePassword = await bcrypt.compare(request.password, user.password)

    if(!validatePassword) return null

    const payload = {
        id: user.id,
        level: user.level
    }

    return jwt.sign(payload, process.env.SECRET_TOKEN as string, {
        expiresIn: '1h'
    })


}