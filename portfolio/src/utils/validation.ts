export function validateEmailConfig(): void {
  const requiredEnvVars = [
    'VITE_BREVO_API_KEY',
    'VITE_BREVO_EMAIL',
    'VITE_TO_EMAIL'
  ];

  const missingVars = requiredEnvVars.filter(
    varName => !import.meta.env[varName]
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}. Please check your .env file.`
    );
  }
}