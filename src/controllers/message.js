import { v4 as uuidv4 } from 'uuid'

class Message {

    getMessage(req,res) {
        return res.send(req.context.models.messages[req.params.messageId])
    }
    
    getMessages(req,res) {
        return res.send(Object.values(req.context.models.messages))
    }

    createMessage(req,res) {
        const id = uuidv4();
        const message = {
          id,
          text: req.body.text,
          userId: req.context.me.id,
         
        }
      
        req.context.models.messages[id] = message;
      
        return res.send(message)
    }

    updateMessage(req,res) {
        return res.send(`PUT HTTP method on message/${req.params.messageId} resource`)
    }

    deleteMessage(req,res) {
        const {
            [req.params.messageId] : message,
            ...otherMessages
          } = req.context.models.messages
        
          req.context.models.messages = otherMessages
        
          return res.send(
            message
            )
    }

}


export default Message