import express from 'express'
import registerMiddleware from '../middleware/register-middleware'
import test from '../controllers/auth-controller'

const router = express.Router()

router.post('/register', registerMiddleware, test.register)

export default router