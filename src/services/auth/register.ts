import { insertDocument } from '../../repositories/document'
import { insertUser } from '../../repositories/user'
import bcrypt from 'bcrypt'

export interface UserRegister {
    username: string,
    email: string,
    password: string
}

export const userRegister = async (request: UserRegister) => {

    const hashedPassword = await bcrypt.hash(request.password, 10)
    request.password = hashedPassword

    try {
        const user = await insertUser(request)
        await insertDocument(user)
    } catch (err) {
        return err
    }

    return true

}