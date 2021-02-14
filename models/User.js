// User models

const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 'Please use a valid email']
  },
  thoughts: {
    type: Schema.ObjectId,
    ref: 'Thought'
  },
  friends: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  toJSON: {
    virtuals: true
  }
});

UserSchema.virtual('friendCount').get(function () {
  return this.friends.reduce((total, friends) => total + friends.length)
});

const User = model('User', UserSchema);

module.exports = User;