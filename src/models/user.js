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
      unique: true },
    password: { 
      type: String,
      unique: true,
      require: true },
    token: { 
      type: String }
  },
  { timestamps: true },
)

userSchema.statics.findByLogin = async function (login) {
  let user = await this.findOne({
    username: login,
  });

  if (!user) {
    user = await this.findOne({ email: login })
  }

  return user
}
// we add a pre hook to remove all messages of this user on its deletion:

userSchema.pre('remove', function(next) {
  this.model('Message').deleteMany({ user: this._id }, next)
})

const User = mongoose.model('User', userSchema)

export default User