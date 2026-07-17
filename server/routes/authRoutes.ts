import express from 'express'
import { loginUser, logoutUser, registerUser, verifyUsr } from '../controllers/AuthController.js'
import protect from '../middlewares/auth.js'

const AuthRouter = express.Router()

AuthRouter.post('/register', registerUser)
AuthRouter.post('/login', loginUser)
AuthRouter.get('/verify', protect, verifyUsr)
AuthRouter.post('/logout', protect, logoutUser)


export default AuthRouter