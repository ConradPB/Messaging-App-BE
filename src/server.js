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
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.User[1],}
  next();
})
app.use('/session', routes.session)
app.use('/users', routes.user)
app.use('/messages', routes.message)

// re-initializing your database on every Express server start

const eraseDatabaseOnSync = true

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ])
  }

  app.listen(process.env.PORT, () =>
  console.log(`App is hot and listening on port ${process.env.PORT}!`),
)
})