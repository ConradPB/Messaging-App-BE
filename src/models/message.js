import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,

      // Associating a message with a user
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    },
  },
  { timestamps: true },
);

const Message = mongoose.model('Message', messageSchema);

export default Message