import { Resend } from 'resend';

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: options.from || 'GeoSync Agency <contact@geosync.agency>',
      to: options.to,
      subject: options.subject,
      html: options.html,
    });
    
    console.log("Email sent successfully to:", options.to);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Email service failed to send message");
  }
}

