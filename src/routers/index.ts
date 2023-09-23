import express from 'express'
import authRouter from './auth-router'

const router = express.Router()

// auth user
router.use(authRouter)

export default router