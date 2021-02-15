// user routes
const router = require('express').Router();

const { getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controllers');

// api/users
// get all users
// post create new user

router.route('/').get(getAllUsers).post(createUser);

// api/users/:id
// get user by id populate thought and friend data
// put update user by id
// remove user by id

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
// POST add new friend to friends list
// DELETE remove friend from frends list

router.route('/:userId/friends/:friendsId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;