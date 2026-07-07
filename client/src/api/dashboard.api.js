import api from "./axios";

export const getDashboard = async () => {
  const { data } = await api.get("/admin/dashboard");
  return data;
};