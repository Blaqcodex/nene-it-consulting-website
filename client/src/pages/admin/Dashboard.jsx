import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { getDashboard } from "../../api/dashboard.api";
import StatCard from "../../components/dashboard/StatCard";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);

const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadDashboard = async () => {
    try {
      const data = await getDashboard();
      setDashboard(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  loadDashboard();
}, []);

if (loading) {
  return (
    <DashboardLayout>
      <h1 className="text-3xl text-white">
        Initializing Mission Control...
      </h1>
    </DashboardLayout>
  );
}

  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold">
  Welcome Commander.
</h1>

<p className="text-gray-400 mt-3">
  Mission Control is operational.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

  <StatCard
    title="Total Enquiries"
    value={dashboard.statistics.totalEnquiries}
    color="cyan"
  />

  <StatCard
    title="New"
    value={dashboard.statistics.newEnquiries}
    color="green"
  />

  <StatCard
    title="Contacted"
    value={dashboard.statistics.contacted}
    color="yellow"
  />

  <StatCard
    title="Closed"
    value={dashboard.statistics.closed}
    color="red"
  />

</div>

      <p className="text-gray-400 mt-3">
        Mission Control is operational.
      </p>

    </DashboardLayout>
  );
};

export default Dashboard;