import { v4 as uuidv4 } from 'uuid'

class Message {

    async getMessage(req,res) {
        const message = await req.context.models.Message.findById(req.params.messageId)
        return res.send(message)
    }
    
    async getMessages(req,res) {
        const messages = await req.context.models.Message.find()

        return res.send(messages)
    }

   async createMessage(req,res,next) {
                const id = uuidv4()
                const message = await req.context.models.Message.create({
                    id,
                    text: req.body.text,
                    userId: req.context.me.id,
        }).catch(next) 
         
        return res.send(message)
    }
    

    async updateMessage(req,res) {
        const id = uuidv4()
        const message = await req.context.models.Message.findById(req.params.messageId)

        if (message) {
            await message.updateOne({
                id,
                text: req.body.text,
                userId: req.context.me.id,
               
              })
    }
    
    return res.send(message)
    }

    async deleteMessage(req,res) {
        const message = await req.context.models.Message.findById(req.params.messageId)

        if (message) {
            await message.remove()
    }
    
    return res.send(
            message
            )
    }

}


export default Message