import express from 'express'
import registerMiddleware from '../middleware/register-middleware'
import loginMiddleware from '../middleware/login-middleware'
import { login, register } from '../controllers/auth-controller'

const router = express.Router()

router.post('/register', registerMiddleware, register)
router.post('/login', loginMiddleware, login)

export default router