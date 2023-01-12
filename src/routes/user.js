import { Router } from 'express';
import User from '../controllers/user';


const router = Router();

const user = new User()

router.get('/', user.getUsers)


export default router