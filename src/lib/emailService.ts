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
    // Prepare template parameters - using common EmailJS template variable names
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_name: 'Sidharth',
      to_email: 'sidharthkardam287@gmail.com',
      reply_to: data.email,
      // Additional common template variables that might be expected
      user_name: data.name,
      user_email: data.email,
      user_message: data.message,
      user_subject: data.subject
    };

    console.log('Sending email with params:', {
      service_id: emailConfig.serviceId,
      template_id: emailConfig.templateId,
      user_id: emailConfig.userId,
      template_params: templateParams
    });

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: emailConfig.serviceId,
        template_id: emailConfig.templateId,
        user_id: emailConfig.userId,
        template_params: templateParams
      })
    });

    // Get response text for better error debugging
    const responseText = await response.text();
    
    if (!response.ok) {
      console.error('EmailJS API Error:', {
        status: response.status,
        statusText: response.statusText,
        response: responseText
      });
      
      // Provide more specific error messages based on status code
      if (response.status === 422) {
        throw new Error(`EmailJS configuration error (422): The template parameters may not match your EmailJS template. Please check your EmailJS dashboard to ensure the template variables are correctly configured. Response: ${responseText}`);
      } else if (response.status === 400) {
        throw new Error(`Bad request (400): Invalid EmailJS configuration or parameters. Response: ${responseText}`);
      } else if (response.status === 401) {
        throw new Error(`Unauthorized (401): Invalid EmailJS user ID or service configuration. Response: ${responseText}`);
      } else if (response.status === 404) {
        throw new Error(`Not found (404): EmailJS service or template not found. Response: ${responseText}`);
      } else {
        throw new Error(`HTTP error! status: ${response.status}, response: ${responseText}`);
      }
    }

    console.log('Email sent successfully:', responseText);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Re-throw to let the component handle it
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