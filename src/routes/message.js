import { Router } from 'express'
import Message from '../controllers/message'

const router = Router()

const message = new Message()


router.get('/', message.getMessages)
  
router.get('/:messageId', message.getMessage)

router.post('/', message.createMessage)
  
router.put('/:messageId', message.updateMessage)

  
router.delete('/:messageId', message.deleteMessage)


  export default router