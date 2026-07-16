import { fetchContacts } from "../services/admin.service.js";
import { getContactsSchema, updateContactStatusSchema, } from "../validators/admin.validator.js";
import Contact from "../models/contact.model.js";
import {
  updateContactStatus as updateContactStatusService, 
  deleteContact as deleteContactService,
} from "../services/admin.service.js";

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

    const now = new Date();

const startOfToday = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate()
);

const startOfWeek = new Date(startOfToday);
startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

const startOfMonth = new Date(
  now.getFullYear(),
  now.getMonth(),
  1
);

const today = await Contact.countDocuments({
  createdAt: { $gte: startOfToday },
});

const thisWeek = await Contact.countDocuments({
  createdAt: { $gte: startOfWeek },
});

const thisMonth = await Contact.countDocuments({
  createdAt: { $gte: startOfMonth },
});

const conversionRate =
  totalEnquiries === 0
    ? 0
    : Math.round((closed / totalEnquiries) * 100);

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

      analytics: {
  today,
  thisWeek,
  thisMonth,
  conversionRate,
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

export const updateContactStatus = async (req, res) => {
  try {
    const { error, value } =
  updateContactStatusSchema.validate(req.body);

if (error) {
  return res.status(400).json({
    success: false,
    message: error.details[0].message,
  });
}

const { status } = value;

    const contact = await updateContactStatusService(
  req.params.id,
  status
);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully.",
      data: contact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await deleteContactService(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully.",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};