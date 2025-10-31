import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Name, email, and message are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const emailContent = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Subject: ${subject || 'No subject'}
      Message: ${message}
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'globirix@gmail.com',
      subject: `Contact Form - ${subject || 'New Message'}`,
      text: emailContent
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send message', 
      error: error.message 
    }, { status: 500 });
  }
}