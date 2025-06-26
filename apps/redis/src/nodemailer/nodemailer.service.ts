import { Inject, Injectable } from '@nestjs/common';
import nodemailer, { SentMessageInfo } from 'nodemailer';
import { NodemailerProvider } from './nodemailer-provider';


type SendEmailHandler = {
  name: string;
  email: string;
};


@Injectable()
export class NodemailerService {
  constructor(
    @Inject(NodemailerProvider.provide)
    private readonly sendEmailProvider: nodemailer.Transporter<SentMessageInfo>,
  ) { }

  async handler({ name, email }: SendEmailHandler) {
    await this.sendEmailProvider.sendMail({
      from: 'Microservice Redis <redisService@example.com>',
      to: email,
      subject: `Olá, ${name}!`,
      text: `Olá, ${name}!

Seja muito bem-vindo(a) à nossa plataforma. Estamos felizes em ter você conosco!

Conte com a gente para o que precisar. Qualquer dúvida, é só responder este e-mail.

Um grande abraço,
Equipe Microservice Email Sending`,
      html: `<p>Olá, <strong>${name}</strong>!</p>
<p>Seja muito bem-vindo(a) à nossa plataforma. <br>
Estamos <b>felizes</b> em ter você conosco!</p>
<p>Conte com a gente para o que precisar.<br>
Qualquer dúvida, é só responder este e-mail.</p>
<p style="margin-top:24px;">Um grande abraço,<br>
Equipe <b>Microservice Email Sending</b></p>`,
    });
  }
}
