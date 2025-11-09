import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // TODO: Implement email sending via SendGrid or SMTP
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'sales@disintox.com',
    //   from: process.env.SMTP_FROM,
    //   subject: 'New Demo Request',
    //   html: `<strong>Name:</strong> ${formData.name}...`,
    // });

    // TODO: Send webhook to CRM
    // await fetch(process.env.CRM_WEBHOOK_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    console.log('Demo request received:', formData);

    return NextResponse.json(
      { message: 'Demo request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
