import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'organization', 'role', 'phone', 'email', 'sector', 'privacyConsent'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Implement email sending via SendGrid or SMTP
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'customercare@dis-infect.in',
    //   from: process.env.SMTP_FROM,
    //   subject: 'New Demo Request from Website',
    //   html: `
    //     <h2>New Demo Request</h2>
    //     <p><strong>Name:</strong> ${formData.name}</p>
    //     <p><strong>Organization:</strong> ${formData.organization}</p>
    //     <p><strong>Role:</strong> ${formData.role}</p>
    //     <p><strong>Phone:</strong> ${formData.phone}</p>
    //     <p><strong>Email:</strong> ${formData.email}</p>
    //     <p><strong>Sector:</strong> ${formData.sector}</p>
    //     <p><strong>Message:</strong> ${formData.message || 'N/A'}</p>
    //   `,
    // });

    // TODO: Send webhook to CRM
    // await fetch(process.env.CRM_WEBHOOK_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    // Log the request (in production, this would be replaced with actual email/CRM integration)
    console.log('Demo request received:', {
      timestamp: new Date().toISOString(),
      ...formData
    });

    return NextResponse.json(
      {
        message: 'Demo request submitted successfully',
        success: true
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      {
        error: 'Failed to process request. Please try again or contact us directly.',
        success: false
      },
      { status: 500 }
    );
  }
}
