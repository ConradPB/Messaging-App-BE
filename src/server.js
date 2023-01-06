import { v4 as uuidv4 } from 'uuid'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import models from './models'

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],}
  next();
})


app.get('/session', (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
})

app.get('/users', (req, res) => {
  return res.send(Object.values(req.context.models.users))
  })

app.get('/users/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId])
  })

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource')
  })

app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  )
  })  

app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DLT HTTP method on user/${req.params.userId} resource`,
  )
  })

  app.get('/messages', (req, res) => {
    return res.send(Object.values(req.context.models.messages))
    })
  
  app.get('/messages/:messageId', (req, res) => {
    return res.send(req.context.models.messages[req.params.messageId])
    })

  app.post('/messages', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
   
  };

  req.context.models.messages[id] = message;

  return res.send(message);
})
  
app.put('/messages/:messageId', (req, res) => {
  
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`)
  
})

  
app.delete('/messages/:messageId', (req, res) => {
  const {
    [req.params.messageId] : message,
    ...otherMessages
  } = req.context.models.messages

  req.context.models.messages = otherMessages

  return res.send(
    message
    )
  })

  

  app.listen(process.env.PORT, () =>
  console.log(`App is hot and listening on port ${process.env.PORT}!`),
)