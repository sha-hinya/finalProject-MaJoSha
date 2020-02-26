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
    accessRole: {
      type: String,
      enum: ['client', 'registered', 'moderator', 'admin'],
    },
    property: [
      {
        type: Schema.Types.ObjectId,
        ref: property,
      },
    ],
    _upvotes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
);

const User = mongoose.model('User', userSchema);
module.exports = User;
