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
  autoReplyTemplateId: string;
  userId: string;
}

// EmailJS configuration - You'll need to set these up in your EmailJS account
export const emailConfig: EmailJSConfig = {
  serviceId: 'service_portfolio', // Replace with your EmailJS service ID
  templateId: 'template_contact', // Replace with your EmailJS template ID
  autoReplyTemplateId: 'template_auto_reply', // Replace with your auto-reply template ID
  userId: 'your_emailjs_user_id' // Replace with your EmailJS user ID
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
          to_email: 'sid240711@gmail.com'
        }
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendAutoReply = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: emailConfig.serviceId,
        template_id: emailConfig.autoReplyTemplateId,
        user_id: emailConfig.userId,
        template_params: {
          to_name: data.name,
          to_email: data.email,
          subject: 'Thank you for contacting me!',
          message: `Hi ${data.name},

Thank you for reaching out! I've received your message about "${data.subject}" and I appreciate you taking the time to contact me.

I'll review your message and get back to you within 24-48 hours. In the meantime, feel free to check out my projects and experience on my portfolio.

Best regards,
Sidharth
Software Engineer with AI Integration

---
This is an automated response. Please do not reply to this email.`
        }
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending auto-reply:', error);
    return false;
  }
};

// Alternative: Formspree integration (simpler setup)
export const sendEmailViaFormspree = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('https://formspree.io/f/your_form_id', { // Replace with your Formspree form ID
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Error sending email via Formspree:', error);
    return false;
  }
};