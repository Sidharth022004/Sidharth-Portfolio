# Email Setup Instructions

This portfolio includes a fully functional contact form with email capabilities. Here's how to set it up:

## Option 1: EmailJS (Recommended)

EmailJS allows you to send emails directly from the frontend without a backend server.

### Setup Steps:

1. **Create an EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, etc.)
   - Follow the setup instructions for your email provider

3. **Create Email Templates**
   
   **Main Contact Template:**
   - Go to "Email Templates" and create a new template
   - Template ID: `template_contact`
   - Subject: `New Contact Form Submission: {{subject}}`
   - Content:
   ```
   New message from your portfolio contact form:

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}

   ---
   Sent from your portfolio website
   ```

   **Auto-Reply Template:**
   - Create another template
   - Template ID: `template_auto_reply`
   - Subject: `Thank you for contacting me!`
   - Content:
   ```
   Hi {{to_name}},

   Thank you for reaching out! I've received your message about "{{subject}}" and I appreciate you taking the time to contact me.

   I'll review your message and get back to you within 24-48 hours. In the meantime, feel free to check out my projects and experience on my portfolio.

   Best regards,
   Sidharth
   Software Engineer with AI Integration

   ---
   This is an automated response. Please do not reply to this email.
   ```

4. **Update Configuration**
   - In `src/lib/emailService.ts`, update the configuration:
   ```typescript
   export const emailConfig: EmailJSConfig = {
     serviceId: 'your_service_id', // From EmailJS dashboard
     templateId: 'template_contact',
     autoReplyTemplateId: 'template_auto_reply',
     userId: 'your_user_id' // From EmailJS dashboard
   };
   ```

5. **Get Your User ID**
   - Go to "Account" in EmailJS dashboard
   - Copy your User ID

## Option 2: Formspree (Simpler Alternative)

Formspree is easier to set up but has fewer features.

### Setup Steps:

1. **Create a Formspree Account**
   - Go to [Formspree.io](https://formspree.io/)
   - Sign up for a free account

2. **Create a New Form**
   - Create a new form in your dashboard
   - Copy the form endpoint URL

3. **Update the Code**
   - In `src/components/Contact.tsx`, replace the EmailJS implementation with:
   ```typescript
   const response = await fetch('https://formspree.io/f/your_form_id', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(formData)
   });
   ```

## Features Included:

✅ **Form Validation** - Client-side validation with error messages
✅ **Loading States** - Shows sending status with spinner
✅ **Success/Error Messages** - User feedback for form submission
✅ **Auto-Reply** - Automatic thank you email to users
✅ **Email Notifications** - You receive emails when someone contacts you
✅ **Responsive Design** - Works on all devices
✅ **Accessibility** - Proper ARIA labels and keyboard navigation
✅ **Rate Limiting** - Prevents spam submissions

## Testing:

1. Fill out the contact form on your website
2. Check your email for the notification
3. Check the sender's email for the auto-reply
4. Verify all form validations work correctly

## Security Notes:

- Never expose your private API keys in frontend code
- EmailJS and Formspree handle the security for you
- Both services have spam protection built-in
- Consider adding a CAPTCHA for additional protection

## Troubleshooting:

- **Emails not sending**: Check your service configuration and API keys
- **Auto-reply not working**: Verify the auto-reply template is set up correctly
- **Form validation issues**: Check the browser console for JavaScript errors
- **Styling problems**: Ensure Tailwind CSS is properly configured

## Support:

If you need help setting up the email functionality, feel free to:
- Check the EmailJS documentation
- Contact EmailJS or Formspree support
- Review the browser console for error messages