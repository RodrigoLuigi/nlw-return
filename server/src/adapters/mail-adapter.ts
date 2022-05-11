export interface SandMailData {
  subject: string;
  body: string;
}
export interface MailAdapter {
  sandMail: (data: SandMailData) => Promise<void>;
}