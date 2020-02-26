/* We'll write the schema and register our model for the users here */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    lastName: String,
    firstName: String,
    email: String,
    password: String,
    phone: String,
    activated_at: Date,
    accessRole: {
      type: String,
      enum: ['client', 'moderator', 'admin'],
    },
    property: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Property',
      },
    ],
    _upvotes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const User = mongoose.model('User', userSchema);
module.exports = User;
