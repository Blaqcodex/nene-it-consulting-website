import { useEffect, useState } from "react";
import { getServices } from "../api/servicesApi";

export default function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        setError("Failed to load services.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  return {
    services,
    loading,
    error,
  };
}