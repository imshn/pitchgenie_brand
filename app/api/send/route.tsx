import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'PitchGenie Contact <support@pitchgenie.in>',
      to: ['shahnawaz28april@gmail.com'], // Update this to your email
      subject: `New Contact from ${name}`,
      react: <EmailTemplate name={name} email={email} company={company} message={message} />,
      replyTo: email,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
