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
} = require('../../controllers/thought-controller');

// /api/thoughts
// GET all thoughts
// GET single thought by id
// POST create new thought $push created thought by id to users thoughts array
// PUT update thought by id
// DELETE remove thought by id

router.route('/')
  .get(getAllThoughts);

router.route('/:thoughtId')
  .get(getThoughtById);

router.route('/:userId')
  .post(createThought)

router.route('/:userId/:thoughtId')
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:thoughtId/reactions
// POST create reaction stored in a single thoughts array
// DELETE $pull and remove a reaction by the reactions id 

router.route('/:thoughtId/:reactionId')
  .post(createReaction)
  .delete(removeReaction);

module.exports = router;