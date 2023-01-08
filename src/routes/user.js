import { Router } from 'express';
import User from '../controllers/user';


const router = Router();

const user = new User()

router.get('/', user.getUsers)

router.get('/:userId', user.fetchUser)




router.post('/', user.createUser)

router.put('/:userId', (req, res) => {
        return res.send(`PUT HTTP method on user/${req.params.userId} resource`,
        )
        })  
      
router.delete('/:userId', (req, res) => {
        return res.send(
          `DLT HTTP method on user/${req.params.userId} resource`,
        )
        })  
        
export default router