//thought routes
const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction,
  addFriend,
  removeFriend
} = require('../../controllers/thought-controller');

// /api/thoughts
// GET all thoughts
// GET single thought by id
// POST create new thought $push created thought by id to users thoughts array
// PUT update thought by id
// DELETE remove thought by id

router.route('/api/thoughts')
  .get(getAllThoughts)
  .get(getThoughtById)
  .post(createThought)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:thoughtId/reactions
// POST create reaction stored in a single thoughts array
// DELETE $pull and remove a reaction by the reactions id 

router.route('/api/thoughts/:thoughtId/reactions')
  .post(createReaction)
  .delete(removeReaction);

// /api/users/:userId/friends/:friendId
// POST add new friend to friends list
// DELETE remove friend from frends list

router.route('/api/users/:userId/friends/:friendsId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;