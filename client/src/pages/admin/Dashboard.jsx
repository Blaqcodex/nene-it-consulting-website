import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { getDashboard } from "../../api/dashboard.api";
import StatCard from "../../components/dashboard/StatCard";
import RecentSignals from "../../components/dashboard/RecentSignals";
import MissionAnalytics from "../../components/dashboard/MissionAnalytics";
import EnquiriesChart from "../../components/dashboard/EnquiriesChart";

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

  <div className="p-8">

    <div className="mb-10">

      <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
        Mission Control
      </p>

      <h1 className="text-4xl font-bold text-white mt-2">
        Welcome Commander.
      </h1>

      <p className="text-gray-400 mt-3">
        Mission Control is operational.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

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

    <MissionAnalytics
      analytics={dashboard.analytics}
    />

    <EnquiriesChart />

    <RecentSignals
      enquiries={dashboard.recentEnquiries}
    />

  </div>

</DashboardLayout>
  );
};

export default Dashboard;