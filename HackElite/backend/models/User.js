const mongoose = require('mongoose')
const validate = require('validator')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Please provide a name'],
      minlength: 3,
      maxlength: 40
   },
   email: {
      type: String,
      required: [true, 'Please provide a email'],
      validate: {
         validator: validate.isEmail,
         message: 'Please provide a valid email'
      },
      unique: true
   },
   password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
   },
   role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
   },
}, { versionKey: false })


UserSchema.pre('save', async function () {

   if (!this.isModified('password')) return

   // Hashing the password.
   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function (candidatePassword) {

   // Comparing the password.
   const isMatch = await bcrypt.compare(candidatePassword, this.password)
   return isMatch
}

module.exports = mongoose.model('User', UserSchema)