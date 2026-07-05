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

const { page, limit, search, status, sort } = value;

    const filter = {};

if (search) {
  filter.$or = [
    {
      name: {
        $regex: search,
        $options: "i",
      },
    },
    {
      email: {
        $regex: search,
        $options: "i",
      },
    },
    {
      company: {
        $regex: search,
        $options: "i",
      },
    },
  ];
}

if (status) {
  filter.status = status;
}

    const skip = (page - 1) * limit;

    const totalContacts = await Contact.countDocuments(filter);

    const sortOption =
  sort === "asc"
    ? { createdAt: 1 }
    : { createdAt: -1 };

    const contacts = await Contact.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limit)
      .select("-__v");

    res.status(200).json({
      success: true,

      pagination: {
        page,
        limit,
        totalContacts,
        totalPages: Math.ceil(totalContacts / limit),
      },

      data: contacts,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};