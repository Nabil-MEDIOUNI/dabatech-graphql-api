const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      default: '',
    },
    photo: {
      url: { type: String },
      public_id: { type: String },
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    bio: {
      type: String,
    },
    phone: {
      type: String,
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);
