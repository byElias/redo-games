import * as nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: '',
        pass: ''
    }
});

export default defineEventHandler(async event => {
    const body = await readBody(event)
    console.log('body', body)
    try{
        await transporter.sendMail({
            from: `"${body.firstname} ${body.lastname}" <${body.mailAdress}>`,
            to: "elias.dreher3@gmail.com",
            sender: "email hahahahha",
            text: `${body.textMessage}`,
        })
    } catch(error){
        console.error('error', error)
    }
    
})