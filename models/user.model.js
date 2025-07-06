import mongoose, { modelNames } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'This emil is not valid'],
    minLength: 3,
    maxLength:100,
    trim:true,
  },
  email: {
    type: String,
    required: [true, 'provide email to continue'],
    trim: true,
    minLength: 3,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'provide valid email addr'],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'provide password to continue'],
    minLength: 6,
    trim: false,
    
  }
}, { timestamps: true })

const User = mongoose.model('User', userSchema);

export default User;