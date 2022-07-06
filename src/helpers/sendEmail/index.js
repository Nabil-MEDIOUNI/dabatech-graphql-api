const nodeMailer = require('nodemailer');
const { sendPassword, sendResetLink } = require('./view');

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.USER_PASSWORD,
  },
});

module.exports.LNSTransporter = nodeMailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 587,
  auth: {
    user: process.env.LNS_USER,
    pass: process.env.LNS_USER_PASSWORD,
  },
});

module.exports.sendResetLink = (email, id) => {
  const mailOptions = {
    to: email,
    subject: 'Reset password instructions',
    html: sendResetLink(email, id),
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent!');
    }
  });
};

module.exports.sendValidationURL = (email, name, validation) => {
  const mailOptions = {
    to: email,
    subject: 'Verify Account',
    html: sendPassword(name, validation),
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent!');
    }
  });
};
