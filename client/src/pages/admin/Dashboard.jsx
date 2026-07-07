import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { getDashboard } from "../../api/dashboard.api";

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

<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

  <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
    <p className="text-gray-400">Total Enquiries</p>

    <h2 className="text-4xl font-bold mt-2">
      {dashboard.statistics.totalEnquiries}
    </h2>
  </div>

  <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
    <p className="text-gray-400">New</p>

    <h2 className="text-4xl font-bold mt-2">
      {dashboard.statistics.newEnquiries}
    </h2>
  </div>

  <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
    <p className="text-gray-400">Contacted</p>

    <h2 className="text-4xl font-bold mt-2">
      {dashboard.statistics.contacted}
    </h2>
  </div>

  <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
    <p className="text-gray-400">Closed</p>

    <h2 className="text-4xl font-bold mt-2">
      {dashboard.statistics.closed}
    </h2>
  </div>

</div>

      <p className="text-gray-400 mt-3">
        Mission Control is operational.
      </p>

    </DashboardLayout>
  );
};

export default Dashboard;