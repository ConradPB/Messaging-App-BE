import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: { 
      type: String, 
      unique: true,
      sparse:true },
    password: { 
      type: String,
      require: true },
    token: { 
      type: String }
  },
  { timestamps: true },
)


// we add a pre hook to remove all messages of this user on its deletion:

userSchema.pre('remove', function(next) {
  this.model('Message').deleteMany({ user: this._id }, next)
})

const User = mongoose.model('User', userSchema)

export default User