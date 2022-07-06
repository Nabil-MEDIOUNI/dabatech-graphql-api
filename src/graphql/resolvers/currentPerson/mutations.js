const bcrypt = require('bcrypt');

const User = require('../../../models/user');

const isAuth = require('../../../middleware/is-auth');
const { uploadFile } = require('../../../helpers/uploadFile');
const { getArgumentInput } = require('../../../helpers/getArgumentInput');

module.exports.CurrentPersonMutations = {
  currentPersonUpdate: async (_, { person }, { req }) => {
    User.findByIdAndUpdate(
      isAuth(req),
      { $set: getArgumentInput(person) },
      { new: true },
    ).exec((err) => {
      if (err) throw new Error(err);
    });

    const { password } = getArgumentInput(person);
    const user = await User.findById(isAuth(req));
    if (!password) return user;
    const SAME_OLD_PASSWORD = await bcrypt.compare(password, user.password);

    if (!SAME_OLD_PASSWORD) {
      const HASHED_PASSWORD = await bcrypt.hash(password, 10);
      user.password = HASHED_PASSWORD;
      user.save();
    }

    return user;
  },
  changePhoto: async (_, { file }, { req }) => {
    const user = await User.findById(isAuth(req));
    const { filename } = await file;
    const { createReadStream } = await file;
    const { public_id: id, url } = await uploadFile(filename, createReadStream);

    User.findByIdAndUpdate(
      isAuth(req),
      { $set: { photo: { public_id: id, url } } },
      { new: true },
    ).exec((err) => {
      if (err) throw new Error(err);
    });
    return user;
  },
};
