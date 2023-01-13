import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes'
import models, { connectDb } from './models'
mongoose.set('strictQuery', true)


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(async(req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('Rizzo'),}
  next();
})
app.use('/session', routes.session)
app.use('/users', routes.user)
app.use('/messages', routes.message)

// re-initializing the database on every Express server start

const eraseDatabaseOnSync = true

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ])

    createUsersWithMessages()
  }

  app.listen(process.env.PORT, () =>
  console.log(`App is hot and listening on port ${process.env.PORT}!`),
)
})
  // seeding db
const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'Rizzo',
  })
  const message1 = new models.Message({
    text: 'Herree wee goo!!',
    user: user1.id,
  })

  const user2 = new models.User({
    username: 'Tia marie',
  })
  const message2 = new models.Message({
    text: 'Oh yaa! Its time!!!',
    user: user2.id,
  })
  const message3 = new models.Message({
    text: 'Lets get it!!',
    user: user2.id,
  })

  await message1.save()
  await message2.save()
  await message3.save()

  await user1.save()
  await user2.save()
}