const mongoose = require('mongoose');

const { Schema } = mongoose;

const PasswordRequest = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('PasswordRequest', PasswordRequest);
