import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { fullName, email, subject, message } = await request.json();

    if (!fullName || !email || !subject) {
      return NextResponse.json({ success: false, message: 'Full name, email, and subject are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const emailContent = `
      New Consultation Request
      
      Name: ${fullName}
      Email: ${email}
      Subject: ${subject}
      Message: ${message || 'No message provided'}
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'globirix@gmail.com',
      subject: `Consultation Request - ${subject}`,
      text: emailContent
    });

    return NextResponse.json({ success: true, message: 'Consultation request submitted successfully' });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit consultation request', 
      error: error.message 
    }, { status: 500 });
  }
}