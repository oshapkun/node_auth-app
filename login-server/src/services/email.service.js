'use strict'

require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

async function send({ email, subject, html }) {
  return transporter.sendMail({
    from: 'Auth API',
    to: email,
    subject,
    html,
  })
}

function sendActivaionEmail(email, token) {
  const link = `${process.env.CLIENT_HOST}/activate/${token}`;

  const html = `
    <h5>Please follow this link to activate your account</h5>
    <a href=${link}>${link}</a>
  `;

  return send({
    email, html,
    subject: 'Account activation ✔'
  })
}

module.exports = {
  send,
  sendActivaionEmail
}
