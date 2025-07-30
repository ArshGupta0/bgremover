import express from 'express'
import { userCredits ,clerkWebhooks} from '../controllers/UserController.js'
import  authUser  from '../middlewares/auth.js' // adjust path if needed


const userRouter = express.Router()

userRouter.post('/webhooks',clerkWebhooks)
userRouter.get('/credits',authUser,userCredits)
export default userRouter