import { sendEmail } from '../services/emailService';
import type { ContactFormData } from '../types/contact';

export async function sendContactForm(data: ContactFormData): Promise<void> {
  const result = await sendEmail(data);
  
  if (!result.success) {
    throw new Error(result.message);
  }
}