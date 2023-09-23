import user from '../../repositories/user'
import bcrypt from 'bcrypt'

export interface RequestBody {
    username: string,
    email: string,
    password: string
}

export const userRegister = async (request: RequestBody) => {

    const hashedPassword = await bcrypt.hash(request.password, 10)
    request.password = hashedPassword

    const register = await user.insertUser(request)
    return register

}