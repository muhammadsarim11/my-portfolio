const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://127.0.0.1:5500', // Allow requests from this origin
}));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // or 'STARTTLS'
        auth: {
            user: "muhammadsarimkhan76@gmail.com",
            pass: "ordeybxqiccsimvc"
        }
    });

    const mailOptions = {
        from: email,
        to: "muhammadsarimkhan76@gmail.com",
        subject: 'Contact Form Submission',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        }
        res.status(200).json({
            success: true,
            message: 'Email sent',
            info
        });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});