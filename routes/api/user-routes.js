// user routes
const router = require('express').Router();

const { getAllUser, getUserById, createUser, updateUser, deleteUser } = require('../../controllers/user-controllers');

// api/users
// get all users
// post create new user

router.route('./').get(getAllUser).post(createUser);

// api/users/:id
// get user by id populate thought and friend data
// put update user by id
// remove user by id

router.route('./:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;