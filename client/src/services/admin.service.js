import api from "./api";

export const getContacts = async () => {
  const response = await api.get("/admin/contacts");

  return response.data;
};

export const updateContactStatus = async (id, status) => {
  const response = await api.put(
    `/admin/contacts/${id}/status`,
    { status }
  );

  return response.data;
};

export const deleteContact = async (id) => {
  const response = await api.delete(`/admin/contacts/${id}`);

  return response.data;
};