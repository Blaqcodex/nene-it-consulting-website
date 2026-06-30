import services from "../data/services.js";

export const getServices = (req, res) => {
  res.status(200).json({
    success: true,
    count: services.length,
    data: services,
  });
};