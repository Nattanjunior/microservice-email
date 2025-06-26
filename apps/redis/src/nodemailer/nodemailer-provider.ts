import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'laurel.moen@ethereal.email',
    pass: 'AAxDQtsmcNsfQuNKc4',
  },
});

export const NodemailerProvider = {
  provide: 'NODEMAILER_PROVIDER',
  useValue: transporter,
};
