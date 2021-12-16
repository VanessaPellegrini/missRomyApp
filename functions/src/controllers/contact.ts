import { Mailer } from "../utils/mail";

const { response, request } = require('express');
const { StatusCodes } = require('http-status-codes');

module.exports = {
    post: async (req: any = request, res: any = response ) => {
        const { body } = req;
        const template = `${ body.name } quieres contactarse contigo, su numero telefonico es ${ body.phone } y su correos electronico es ${ body.email }`;
        const email = new Mailer( body.email, 'Contacto Prueba', template);
        email.sendMail()
        //console.log(body);
        res.json({ 
            msg: 'Correo enviado con exito',
            status: StatusCodes.OK 
        });
    }
};