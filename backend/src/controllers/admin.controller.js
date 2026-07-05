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
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";

    const filter = {
  $or: [
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
  ],
};

    const skip = (page - 1) * limit;

    const totalContacts = await Contact.countDocuments(filter);

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
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