// user routes
const router = require('express').Router();

// get all users
// get user by id populate thought and friend data
// post new user
// put update user by id
// remove user by id

const { getAllUser, getUserById, createUser, updateUser, deleteUser } = require('../../controllers/user-controllers');

// api/users
router.route('./').get(getAllUser).post(createUser);

// api/users/:id
router.route('./:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;