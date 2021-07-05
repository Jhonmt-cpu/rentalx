import { ISendMailDTO } from "../dtos/ISendMailDTO";
import { IMailProvider } from "../IMailProvider";

class MailProviderInMemory implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  async sendMail({
    to,
    subject,
    variables,
    path,
  }: ISendMailDTO): Promise<void> {
    this.messages.push({ to, subject, variables, path });
  }
}

export { MailProviderInMemory };
