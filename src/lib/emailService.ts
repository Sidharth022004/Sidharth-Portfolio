// Email service configuration and utilities
export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  userId: string;
}

// EmailJS configuration with your provided credentials
export const emailConfig: EmailJSConfig = {
  serviceId: 'service_zcs78oe',
  templateId: 'template_99niu0d',
  userId: 'ei0M6UgMq2pVvKGNg'
};

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: emailConfig.serviceId,
        template_id: emailConfig.templateId,
        user_id: emailConfig.userId,
        template_params: {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: 'Sidharth',
          to_email: 'sid240711@gmail.com',
          reply_to: data.email
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Validate email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize input data
export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

// Rate limiting helper (simple client-side implementation)
export const checkRateLimit = (): boolean => {
  const lastSubmission = localStorage.getItem('lastEmailSubmission');
  const now = Date.now();
  const cooldownPeriod = 60000; // 1 minute cooldown

  if (lastSubmission && (now - parseInt(lastSubmission)) < cooldownPeriod) {
    return false;
  }

  localStorage.setItem('lastEmailSubmission', now.toString());
  return true;
};