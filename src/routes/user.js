import { Router } from 'express';
import User from '../controllers/user';

const router = Router()

const user = new User()

router.get('/', user.fetchUsers)
  
router.get('/:userId', user.fetchUsers)

router.post('/', user.registerUser)

router.post('/login', user.loginUser)




export default router