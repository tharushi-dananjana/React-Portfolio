export interface EmailConfig {
  apiKey: string;
  fromEmail: string;
  toEmail: string;
}

export interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}