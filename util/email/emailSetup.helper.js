const nodeMailer = require('nodemailer');

const userName = process.env.APP_EMAIL_USERNAME || 'hannaparkingapp@gmail.com';
const password = process.env.APP_EMAIL_PASSWORD_GENERATED || 'rkdkqmmaprijrgcc';
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: userName,
        pass: password
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = transporter;