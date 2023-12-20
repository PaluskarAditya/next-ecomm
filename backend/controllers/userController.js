const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Generates a JWT token
const token = (id) => {
  return jwt.sign(id, process.env.JWT_SECRET);
}

const signup = async (req, res) => {
  try {
    const { email, uname, pass } = req.body
    if (!uname || !pass || !email) {
      res.json({ err: 'please fill all fields' });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(pass, salt);
      const user = await User({
        username: uname, 
        email, 
        password: hashed,
      })
      await user.save();
      user?res.json({user: user, token: token(user.id)}):res.json({err: 'please try again'});
    }
  } catch (error) {
    console.log(error.message);
  }
}

const signin = async (req, res) => {
  try {
    const { uname, pass } = req.body;
    const user = await User.findOne({username: uname});
    if (!user) {
      res.status(404).json({err: 'user not found'});
    } else if (user && await bcrypt.compare(pass, user.password)) {
      res.status(200).json({user, token: token(user.id)});
    } else {
      res.status(401).json({err: 'incorret data'});
    }
  } catch (error) {
    console.log(error.message);
  }
}

const update = async (req, res) => {
  try {
    const { id } = req;
    const { name, uname, img } = req.body;
    const user = await User.findByIdAndUpdate(id, {
      name, 
      username: uname,
      profile_pic: img
    })
    if (user) {
      await user.save();
      res.json(user);
    } else {
      res.status(500).json({err: "internal server error"});
    }
  } catch (error) {
    console.log(error.message);
  }
}

const del = async (req, res) => {
  try {
    const { id }= req;
    const user = await User.findByIdAndDelete(id);
    if (!del) {
      res.json(user);
    } else {
      res.status(500).json({err: "internal server error"});
    }
  } catch (error) { 
    console.log(error.message);
  }
}

const allUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    if (users) {
      res.json(users)
    } else {
      res.status(404).json({err: 'no users found'})
    }
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  signup,
  signin,
  update,
  del,
  allUsers,
}