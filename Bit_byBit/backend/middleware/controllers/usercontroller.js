const User = require('../models/usermodel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)
    const details = await User.find({email: `${email}`})
    if(details.length === 0){
      throw new Error("Invalid Details!") 
    }
    // create a token
    const {expertise, role, username} = details[0]
    const token = createToken(user._id)

    res.status(200).json({email, token, username, role, expertise})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password, role, username, contact, expertise} = req.body

  try {
    const user = await User.signup(email, password,  role, username, contact, expertise)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token, username, role, expertise})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a user
const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.delete(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { signupUser, loginUser, deleteUser }