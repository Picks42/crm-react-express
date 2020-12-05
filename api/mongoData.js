import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  mobile: {
    type: Number,
    required: true,
    unique: true
  },
  userType: {
    type: String,
    default: 'worker'
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  },
  createdByName: {
    type: String
  },
  createdById: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('users', userSchema);