import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL; // Your personal email

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log('Received:', email, subject, message);

    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail, // Send to your email
      reply_to: email, // Visitor can reply directly
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 15px 0; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}