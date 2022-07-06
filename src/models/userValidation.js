const mongoose = require('mongoose');

const { Schema } = mongoose;

const userValidation = new Schema(
  {
    id: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('UserValidation', userValidation);
