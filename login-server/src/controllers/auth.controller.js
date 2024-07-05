'use strict';

const { v4: uuidv4} = require('uuid');

const { validatePassword } = require('../helpers/validatetions.js');
const { User } = require('../models/User.model.js');
const { sendActivaionEmail } = require('../services/email.service.js');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const validationError = validatePassword(password);

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }
  const activationToken = uuidv4();

  const newUser = await User.create({ name, email, password, activationToken });

  await sendActivaionEmail(email, activationToken);
  console.log('email sent');

  res.send(newUser);
};

const activate = async (req, res) => {
  const { activationToken } = req.params;
  const user = await User.findOne({ where: { activationToken }});

  if(!user) {
    res.sendStatus(404);
    return;
  }

  user.activationToken = null;
  user.save();

  res.send(user);
};

module.exports = {
  register,
  activate,
};
