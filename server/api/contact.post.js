import nodemailer from 'nodemailer';
import validator from 'validator';

const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
    host: config.MAILHOST,
    port: config.MAILPORT,
    auth: {
        user: config.MAILUSER,
        pass: config.MAILPASSWORD,
    }
})

export default defineEventHandler(async (eventHandler, response) => 
    {
        try{

            const body = await readBody(event);

            const mail = await transporter.sendMail({
                form: `"${body.name}" <${body.email}>`,
                to: config.CONTACTMAIL,
                subject: body.subject,
                text: body.message,
                html: body.message,
            })

            console.log('Message sent: %s', mail.messageID);
            console.log('Preview URL: %s', nodemailer.
            getTestMessageURL(mail));
            return Promise.resolve();

            return 'Gesendet!';
        }
        catch (error) {
            sendError(event, createError({ statusCode: 400, 
                statusMessage: error}));
        }
});