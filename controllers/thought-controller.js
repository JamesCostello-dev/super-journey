// thought-controllers
const { Thought, User } = require('../models');

const thoughtController = {

  // GET all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
  },

  // GET one thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .then(results => {
        if (!results) {
          res.status(404).json({ message: 'No thought found' });
          return;
        }
        res.json(results);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // POST create thought and push thought by id to users thought array
  createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(results => {
        if (!results) {
          res.status(400).json({ message: 'No user found.' })
          return;
        }
        res.json(results);
      })
      .catch(err => res.json(err));
  },

  // PUT update thought by id
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true, runValidators: true })
      .then(results => {
        if (!results) {
          res.status(400).json({ message: 'No user found.' })
          return;
        }
        res.json(results);
      })
      .catch(err => res.json(err));
  },

  // DELETE remove thought by id
  removeThought({ params }, res) {
    Thought.remove({ _id: params.thoughtId })
      .then(results => {
        if (!results) {
          res.status(400).json({ message: 'No user found.' })
          return;
        }
        res.json(results);
      })
      .catch(err => { res.status(400).json(err) });
  },

  // POST create reaction store in thoughts array
  createReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then(results => {
        if (!results) {
          res.status(400).json({ message: 'No user found' });
          return;
        }
        res.json(results);
      })
      .catch(err => res.json(err));
  },

  // DELETE remove reaction and pull/remove reaction by reaction id
  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: params.reactionId } },
      { new: true }
    )
      .then(results => res.json(results))
      .catch(err => res.json(err));
  }
};

module.exports = thoughtController;