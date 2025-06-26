import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'laurel.moen@ethereal.email',
    pass: 'AAxDQtsmcNsfQuNKc4',
  },
});

export const SendEmailProvider = {
  provide: 'SEND_EMAIL_PROVIDER',
  useValue: transporter,
};
