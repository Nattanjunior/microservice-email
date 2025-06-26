import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'jamar.schulist@ethereal.email',
    pass: 'FaEEnTvZDUgX8uZbgC',
  },
});

export const NodemailerProvider = {
  provide: 'NODEMAILER_PROVIDER',
  useValue: transporter,
};
