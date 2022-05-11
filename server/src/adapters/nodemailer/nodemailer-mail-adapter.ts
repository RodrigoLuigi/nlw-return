import nodemailer from 'nodemailer';
import { MailAdapter, SandMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1d3b84b2b90fb0",
    pass: "5a364dfd1e161c"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sandMail({subject, body}: SandMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Rodrigo Luigi <digaor@gmail.com>',
      subject: subject,
      html: body,
    });
  };
}