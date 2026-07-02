import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendAdminNotification = async (contact) => {
  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "🚀 New Project Enquiry",

    html: `
      <h2>New Project Enquiry</h2>

      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Company:</strong> ${contact.company || "N/A"}</p>

      <hr>

      <p>${contact.message}</p>
    `,
  });
};