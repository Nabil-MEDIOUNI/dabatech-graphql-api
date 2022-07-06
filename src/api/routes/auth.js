const express = require('express');
const {
  login,
  register,
  validateUser,
  specialLogin,
  resetPassword,
  changePassword,
} = require('../controllers/auth');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/validateUser', validateUser);
router.post('/special-login', specialLogin);
router.post('/reset-password', resetPassword);
router.post('/change-password', changePassword);

module.exports = router;
