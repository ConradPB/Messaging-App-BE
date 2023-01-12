import mongoose from 'mongoose'

import User from './user'
import Message from './message'

const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URI)
};

const models = { User, Message }

export { connectDb }

export default models
