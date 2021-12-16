const nodemailer = require('nodemailer')

interface Config{
    from: string,
    to: string,
    subject: string,
    text: string,
}

export class Mailer {

    userMail: string = 'backend.mails.tests@gmail.com';
    passMail: string = 'tcmJdmAfy?48E6j?';
    transporter: any;
    config: Config;

    constructor ( to: string, subject: string, text: string ) {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.userMail,
                pass: this.passMail,
            },
        });

        this.config = {
            from: this.userMail,
            to: to, /* to.split(", "), */
            subject,
            text,
        }
    };

    sendMail(){
        this.transporter.sendMail(this.config, (err:{}, data:{}) => {
            if (err) console.log(err)
            if (data) console.log('Mensaje enviado con exito')
        });
    }


}
