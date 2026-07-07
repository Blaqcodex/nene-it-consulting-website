import api from "./axios";

export const getContacts = async (params) => {
  const response = await api.get(
    "/admin/contacts",
    {
      params,
    }
  );

  return response.data;
};

export const updateContactStatus = async (
  id,
  status
) => {
  const response = await api.put(
    `/admin/contacts/${id}/status`,
    {
      status,
    }
  );

  return response.data;
};

export const deleteContact = async (id) => {
  const response = await api.delete(
    `/admin/contacts/${id}`
  );

  return response.data;
};