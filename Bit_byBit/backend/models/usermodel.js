const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  expertise: { type: String, required: false },
  contact: { type: String, required: true },
  role: { type: String, required: true },
})

// static signup method
userSchema.statics.signup = async function (email, password, role, username, contact, expertise) {

  // validation
  if (!email || !password || !username || !expertise || !contact || !role) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists1 = await this.findOne({ email })
  if (exists1) {
    throw Error('Email already in use')
  }
  const exists2 = await this.findOne({ username })
  if(exists2) {
    throw Error('Username already in use')
  }
  const exists3 = await this.findOne({ contact })
  if(exists3) {
    throw Error('Contact already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash, username, expertise, role, contact })

  return user
}

// static login method
userSchema.statics.login = async function (email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

userSchema.statics.delete = async function (email) {

  if (!email) {
    throw Error('Email is required to delete user')
  }

  const deletedUser = await this.findOneAndDelete({ email })

  if (!deletedUser) {
    throw Error('User not found')
  }

  return deletedUser
}


module.exports = mongoose.model('User', userSchema)