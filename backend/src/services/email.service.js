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

export const sendClientConfirmation = async (contact) => {
  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: contact.email,
    subject: "Thank you for contacting Nene IT & Consulting 🚀",

    html: `
      <div style="
        font-family: Arial, sans-serif;
        max-width:600px;
        margin:auto;
        padding:40px;
        background:#0b1020;
        color:white;
        border-radius:16px;
      ">

        <h1 style="color:#ff8a00;">
          Thank You, ${contact.name}!
        </h1>

        <p>
          We've successfully received your enquiry.
        </p>

        <p>
          One of our consultants will review your project
          and contact you within
          <strong>24 hours.</strong>
        </p>

        <hr style="border-color:#333;margin:30px 0;" />

        <h3>Your Project Summary</h3>

        <p><strong>Company:</strong> ${contact.company || "N/A"}</p>

        <p><strong>Email:</strong> ${contact.email}</p>

        <p><strong>Message:</strong></p>

        <p>${contact.message}</p>

        <hr style="border-color:#333;margin:30px 0;" />

        <p style="color:#aaa;font-size:14px;">
          Nene IT & Consulting<br>
          Engineering Digital Futures
        </p>

      </div>
    `,
  });
};