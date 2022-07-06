const User = require('../../../models/user');
const isAuth = require('../../../middleware/is-auth');

module.exports.CurrentPersonQueries = {
  currentPerson: (_, args, { req }) => User.findById(isAuth(req)),
};
