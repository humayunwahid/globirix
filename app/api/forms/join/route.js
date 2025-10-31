import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      natureOfJob: formData.get('natureOfJob'),
      availabilityFrom: formData.get('availabilityFrom'),
      availabilityTo: formData.get('availabilityTo'),
      qualificationDropdown: formData.get('qualificationDropdown'),
      qualificationText: formData.get('qualificationText'),
      contact: formData.get('contact'),
      experience: formData.get('experience'),
      cv: formData.get('cv'),
      country: formData.get('country'),
      otherCountry: formData.get('otherCountry'),
      formalPicture: formData.get('formalPicture')
    };

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Prepare attachments with validation
    const attachments = [];
    
    if (data.cv && data.cv.size > 0) {
      // Validate CV file size (max 10MB)
      if (data.cv.size > 10 * 1024 * 1024) {
        return NextResponse.json({ success: false, message: 'CV file too large (max 10MB)' }, { status: 400 });
      }
      
      const cvBuffer = Buffer.from(await data.cv.arrayBuffer());
      attachments.push({
        filename: `CV_${data.name}_${data.cv.name}`,
        content: cvBuffer
      });
    }
    
    if (data.formalPicture && data.formalPicture.size > 0) {
      // Validate picture file size (max 2MB)
      if (data.formalPicture.size > 2 * 1024 * 1024) {
        return NextResponse.json({ success: false, message: 'Picture file too large (max 2MB)' }, { status: 400 });
      }
      
      const pictureBuffer = Buffer.from(await data.formalPicture.arrayBuffer());
      attachments.push({
        filename: `Photo_${data.name}_${data.formalPicture.name}`,
        content: pictureBuffer
      });
    }

    // Email content
    const emailContent = `
      New Job Application Received
      
      Name: ${data.name}
      Email: ${data.email}
      Nature of Job: ${data.natureOfJob}
      ${data.availabilityFrom ? `Availability: ${data.availabilityFrom} - ${data.availabilityTo}` : ''}
      Qualification: ${data.qualificationDropdown}${data.qualificationText ? ` (${data.qualificationText})` : ''}
      Contact: ${data.contact}
      Experience: ${data.experience}
      Country: ${data.country}${data.otherCountry ? ` (${data.otherCountry})` : ''}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'globirix@gmail.com',
      subject: `New Job Application - ${data.name}`,
      text: emailContent,
      attachments
    });

    return NextResponse.json({ success: true, message: 'Application submitted successfully' });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit application', 
      error: error.message 
    }, { status: 500 });
  }
}