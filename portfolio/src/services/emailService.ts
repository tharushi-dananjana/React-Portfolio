import type { EmailPayload, EmailResponse } from '../types/email';
import { validateEmailConfig } from '../utils/validation';

const BREVO_API_URL = 'https://api.sendinblue.com/v3/smtp/email';

export async function sendEmail(data: EmailPayload): Promise<EmailResponse> {
  try {
    validateEmailConfig();

    const recipientResponse = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': import.meta.env.VITE_BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          email: import.meta.env.VITE_BREVO_EMAIL,
          name: data.name
        },
        to: [
          {
            email: import.meta.env.VITE_TO_EMAIL,
            name: 'Recipient'
          }
        ],
        replyTo: {
          email: data.email,
          name: data.name
        },
        subject: `Contact Form Submission from ${data.name}`,
        htmlContent: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        `
      })
    });

    if (!recipientResponse.ok) {
      const responseData = await recipientResponse.json();
      return {
        success: false,
        message: responseData.message || 'Failed to send email to the recipient. Please try again.'
      };
    }

    const confirmationResponse = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': import.meta.env.VITE_BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          email: import.meta.env.VITE_BREVO_EMAIL,
          name: 'Anupa Prabhasara'
        },
        to: [
          {
            email: data.email,
            name: data.name
          }
        ],
        subject: 'Thank you for contacting me!',
        htmlContent: `
          <h3>Dear ${data.name},</h3>
          <p>Thank you for reaching out to me. I have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your Message:</strong> ${data.message}</p>
          <p>Best regards,<br>Anupa Prabhasara</p>
        `
      })
    });

    if (!confirmationResponse.ok) {
      const responseData = await confirmationResponse.json();
      return {
        success: false,
        message: responseData.message || 'Failed to send confirmation email to the user. Please try again.'
      };
    }

    return {
      success: true,
      message: 'Emails sent successfully!'
    };
  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.'
    };
  }
}