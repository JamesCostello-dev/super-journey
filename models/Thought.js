// Thought
const { Schema, model } = require('mongoose');

// Reactions
const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.ObjectId,
    default: Schema.ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

// Thought
const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: dateValue => dateFormat(dateValue)
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
},
  {
    toJSON: {
      virtuals: true
    }
  });

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.reduce((total, reactions) => total + reactions.length)
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;