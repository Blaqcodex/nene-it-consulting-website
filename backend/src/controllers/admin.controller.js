import { fetchContacts } from "../services/admin.service.js";
import { getContactsSchema } from "../validators/admin.validator.js";
import Contact from "../models/contact.model.js";

export const getDashboard = async (req, res) => {
  try {
    const totalEnquiries = await Contact.countDocuments();

    const newEnquiries = await Contact.countDocuments({
      status: "New",
    });

    const contacted = await Contact.countDocuments({
      status: "Contacted",
    });

    const closed = await Contact.countDocuments({
      status: "Closed",
    });

    const recentEnquiries = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("-__v");

    res.status(200).json({
      success: true,

      statistics: {
        totalEnquiries,
        newEnquiries,
        contacted,
        closed,
      },

      recentEnquiries,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const { error, value } = getContactsSchema.validate(req.query);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const result = await fetchContacts(value);

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};