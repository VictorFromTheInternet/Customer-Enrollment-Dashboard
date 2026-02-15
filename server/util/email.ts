import type { SendMailOptions } from 'nodemailer'
import transporter from '../services/nodeMailer.js'

//
// Email
//
export async function sendEmail(pdfBuffer: Buffer) {
    try {
        const mailOptions: SendMailOptions = {
            from: process.env.SMTP_SENDER_ID,
            to: 'vma0430@gmail.com',
            subject: '👋 Welcome to my app!',
            text: 'Hello World!',
            attachments: [
                {
                    filename: 'weeklyTrafficReport.pdf',
                    content: pdfBuffer,
                    contentType: 'application/pdf'
                }
            ]
        }

        await transporter.sendMail(mailOptions)
        console.log('Email Sent!')
    } catch (err) {
        console.error(err)
    }
}
//sendEmail()

export default sendEmail
