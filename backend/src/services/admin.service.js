import Contact from "../models/contact.model.js";

export const fetchContacts = async ({
  page,
  limit,
  search,
  status,
  sort,
}) => {
  const skip = (page - 1) * limit;

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

  const sortOption =
    sort === "asc"
      ? { createdAt: 1 }
      : { createdAt: -1 };

  const totalContacts = await Contact.countDocuments(filter);

  const contacts = await Contact.find(filter)
    .sort(sortOption)
    .skip(skip)
    .limit(limit)
    .select("-__v");

  return {
    pagination: {
      page,
      limit,
      totalContacts,
      totalPages: Math.ceil(totalContacts / limit),
    },
    data: contacts,
  };
};

export const updateContactStatus = async (id, status) => {
  const contact = await Contact.findByIdAndUpdate(
    id,
    { status },
    {
      new: true,
      runValidators: true,
    }
  );

  return contact;
};

export const deleteContact = async (id) => {
  const contact = await Contact.findByIdAndDelete(id);

  return contact;
};