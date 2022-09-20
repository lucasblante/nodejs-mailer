require('dotenv').config()
const nodemailer = require('nodemailer')

const user = process.env.USER

const mailTo = {
    from: user,
    to: 'lucasviniciusblante@gmail.com',
    subject: 'Test',
    text: 'Test'
}

const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: process.env.SECURE,
    requireTLS: process.env.TLS,
    auth: {
        user,
        pass: process.env.PASS
    }
})

const mailOptions = mailTo


transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error)
    }
    else {
        console.log('Sent')
    }
})