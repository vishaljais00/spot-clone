// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      unique: true,
      required: true,
    },
    tokenReset: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    deletedAt: {
      type: Date,
      default: null, // Use null to indicate that the document is not deleted
    },
  }, {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  });

const User = mongoose.model('User', userSchema);
export default User;
