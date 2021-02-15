const { User } = require('../models');

// userControllers
const userControllers = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
  },
  // post create new user
  createUser(req, res) {
    User.create(req.body)
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
  },

  // api/users/:id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
  },

  // get user by id populate thought and friend data
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
  },

  // put update user by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id, }, body, { new: true, runValidators: true })
      .then(result => {
        if (!result) {
          res.status(400).json({ message: 'No user found' });
          return;
        }
        res.json(result);
      })
      .catch(err => res.status(400).json(err));
  },

  // remove user by id
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id, })
      .then(result => {
        if (!result) {
          res.status(400).json({ message: 'No user found' });
          return;
        }
        res.json(result);
      })
      .catch(err => res.status(400).json(err));
  },
};

module.exports = userControllers;