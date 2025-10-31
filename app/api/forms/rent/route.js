import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    console.log('API called - rent form');
    const formData = await request.formData();
    console.log('FormData received:', Array.from(formData.entries()));
    
    // Extract form fields
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      natureOfJob: formData.get('natureOfJob'),
      availabilityFrom: formData.get('availabilityFrom'),
      availabilityTo: formData.get('availabilityTo'),
      qualificationDropdown: formData.get('qualificationDropdown'),
      contact: formData.get('contact'),
      country: formData.get('country'),
      otherCountry: formData.get('otherCountry')
    };

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const emailContent = `
      New Resource Request Received
      
      Name: ${data.name}
      Email: ${data.email}
      Nature of Job: ${data.natureOfJob}
      ${data.availabilityFrom ? `Availability: ${data.availabilityFrom} - ${data.availabilityTo}` : ''}
      Qualification: ${data.qualificationDropdown}
      Contact: ${data.contact}
      Country: ${data.country}${data.otherCountry ? ` (${data.otherCountry})` : ''}
    `;

    // For testing - skip email sending
    console.log('Email content:', emailContent);
    console.log('Environment variables:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not set',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not set'
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'globirix@gmail.com',
      subject: `New Resource Request - ${data.name}`,
      text: emailContent
    });

    return NextResponse.json({ success: true, message: 'Request submitted successfully' });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit request', 
      error: error.message 
    }, { status: 500 });
  }
}