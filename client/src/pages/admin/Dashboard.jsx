import DashboardLayout from "../../layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold">
        Welcome Commander.
      </h1>

      <p className="text-gray-400 mt-3">
        Mission Control is operational.
      </p>

    </DashboardLayout>
  );
};

export default Dashboard;