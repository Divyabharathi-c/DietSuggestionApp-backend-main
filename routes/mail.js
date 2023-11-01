import nodemailer from 'nodemailer';


// const email = req.body.email;
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMEIL_PASSWORD
    }
});

export const mailOptions = {
    from: "divyabharathi.csit@gmail.com",
    to: "divyabharathi.csit@gmail.com",
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};