const bcrypt = require('bcrypt');
const uuidv1 = require('uuid');
const { toLower } = require('lodash');

const generateAccessToken = require('../../helpers/generateAccessToken');
const { sendResetLink, sendValidationURL } = require('../../helpers/sendEmail');

const User = require('../../models/user');
const Requests = require('../../models/passwordRequest');
const UserValidation = require('../../models/userValidation');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const lowerEmail = toLower(email).replace(/\s/g, '');

  const getUser = await User.findOne({ email: lowerEmail }).select(
    'id email password is_verified',
  );

  if (!getUser) {
    return res.status(403).json({
      error: 'No user with that email!',
    });
  }

  const valid = await bcrypt.compare(password, getUser.password);
  if (!valid) {
    return res.status(403).json({
      error: 'Incorrect password!',
    });
  }

  if (!getUser.is_verified) {
    return res.status(403).json({
      error: 'Your account is not verified!',
    });
  }

  const maxAge = '12h';
  const token = generateAccessToken(getUser, maxAge);

  getUser.save();

  res.json(token);

  return token;
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const lowerEmail = toLower(email).replace(/\s/g, '');
  const chechUser = await User.findOne({ email: lowerEmail });

  if (chechUser) {
    return res.status(403).json({
      error: 'Email already exist!',
    });
  }

  const hashedpassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email: lowerEmail,
    password: hashedpassword,
  });

  user.photo.url = `https://cdn-expa.aiesec.org/gis-img/missing_profile_${lowerEmail
    .charAt(0)
    .toLowerCase()}.svg`;

  const username = lowerEmail.split('@')[0];

  user.name = username;
  user.bio = 'I am a software developer and a big fan of devchallenges...';
  user.phone = '90824927';

  user.save(); // save manual modifications

  const validation = await UserValidation.create({ email: lowerEmail });
  sendValidationURL(lowerEmail, username, validation);

  res.json({ lowerEmail, validation });

  return email;
};

exports.validateUser = async (req, res) => {
  const getRequest = await UserValidation.findOne({
    email: req.body.email,
    _id: req.body._id,
  });

  if (getRequest) {
    const user = await User.findOne({ email: req.body.email });
    if (user.verified) {
      return res.status(403).json({
        error: 'user is already valid',
      });
    }

    user.is_verified = true;
    user.save();

    const userValidation = await UserValidation.findOneAndRemove({
      _id: req.body.id,
    });

    return userValidation;
  }

  return res.status(403).json({
    error: 'Request does not exist',
  });
};

exports.specialLogin = async (req, res) => {
  const { email } = req.body;
  const lowerEmail = toLower(email).replace(/\s/g, '');

  const getUser = await User.findOne({ email: lowerEmail }).select(
    'id email is_verified',
  );

  if (!getUser) {
    return res.status(403).json({
      error: 'No user with that email!',
    });
  }

  if (!getUser.is_verified) {
    return res.status(403).json({
      error: 'Your account is not verified!',
    });
  }

  if (!getUser.connected_once) {
    getUser.connected_once = true;
    getUser.save();
  }

  const token = generateAccessToken(getUser, '12h');

  res.json(token);

  return token;
};

exports.resetPassword = async (req, res) => {
  const { email } = req.body;
  const lowerEmail = toLower(email).replace(/\s/g, '');

  const thisUser = await User.findOne({ email: lowerEmail });

  if (!thisUser) {
    return res.status(403).json({
      error: 'No user with that email!',
    });
  }

  const id = uuidv1.v1();
  const request = {
    id,
    email: thisUser.email,
  };
  Requests.create(request);
  sendResetLink(thisUser.email, id);

  res.json(request);

  return request;
};

exports.changePassword = async (req, res) => {
  const { email, password, id } = req.body;
  const lowerEmail = toLower(email).replace(/\s/g, '');

  const getRequest = await Requests.findOne({ email: lowerEmail, id });

  if (getRequest) {
    const user = await User.findOne({ email: lowerEmail });

    user.password = await bcrypt.hash(password, 10);
    user.save();

    const getRequests = await Requests.findOneAndRemove({ id });

    return getRequests;
  }

  return res.status(403).json({
    error: 'User / Request does not exist!',
  });
};
