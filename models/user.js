const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const userSchema = new Schema({ 
    name: String,
    email: String,
    company: String,
    password: String
}, { 
    timestamps: true 
});

userSchema.pre('save', function(next) {
    // this will be set to the current document
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    // 'this' is the user doc
    bcrypt.compare(tryPassword, this.password, cb);
  };
  
userSchema.set('toJSON', {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
});

module.exports = mongoose.model('User', userSchema);