const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      minlength: 5, 
      trim: true 
    },
    phone: { 
      type: String, 
      required: true, 
      unique: true, // Ensure no duplicate phone numbers
      minlength: 10, 
      maxlength: 10, 
      match: /^\d{10}$/, // Ensure phone number is exactly 10 digits
      trim: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email validation
      trim: true 
    },
    password: { 
      type: String, 
      required: true, 
      minlength: 8 // Optionally, enforce a minimum length for passwords
    },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Only hash if password is modified
  this.password = await bcrypt.hash(this.password, 10); // Hash with 10 salt rounds
  next();
});

// Method to compare passwords (for login)
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
