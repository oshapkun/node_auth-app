'use strict';

const express = require('express');
const authController = require('../controllers/auth.controller.js');

const authRouter = new express.Router();

authRouter.post('/registration', authController.register);
authRouter.get('/activation/:activationToken', authController.activate);

module.exports = authRouter;
