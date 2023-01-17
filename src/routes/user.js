import { Router } from 'express';
import User from '../controllers/user';


const router = Router()

const user = new User()

router.get('/', user.getUsers)
router.get('/:userId', user.fetchUser)
router.post('/', user.registerUser)
router.post('/', user.loginUser)




export default router