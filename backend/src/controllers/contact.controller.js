import Contact from "../models/contact.model.js";
import {
  sendAdminNotification,
  sendClientConfirmation,
} from "../services/email.service.js";

export const createContact = async (req, res) => {
  try {
    const { email } = req.body;

    // Check for existing enquiry
    const existingContact = await Contact.findOne({ email });

    if (existingContact) {
      return res.status(409).json({
        success: false,
        message: "An enquiry with this email already exists.",
      });
    }

    // Create new enquiry
    const contact = await Contact.create(req.body);
    try {
    await Promise.all([
      sendAdminNotification(contact),
      sendClientConfirmation(contact),
    ]);
  } catch (error) {
    console.error("Email service failed:", error.message);
  }

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      data: contact,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};