import DashboardLayout from "../layout/DashboardLayout";
import Header from "../components/Header";
import ModuleGrid from "../components/ModuleGrid";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleModuleClick = (moduleTitle) => {
    if (moduleTitle === "Maintenance") {
      navigate("/maintenance");
    }
    if (moduleTitle === "Transactions") {
      navigate("/transaction");
    }
    if (moduleTitle === "Feed Mill") {
      navigate("/feedmill");
    }
    if (moduleTitle === "Plant") {
      navigate("/plant");
    }
    if (moduleTitle === "Shops") {
      navigate("/shops");
    }
    if (moduleTitle === "Reports") {
      navigate("/reports");
    }
  };

  return (
    <DashboardLayout>
      <Header />

      <div className="px-2 sm:px-2 md:px-4 lg:px-6">
        {/* Module Grid with animation */}
        <div className="animate-fade-in-up-slow">
          <ModuleGrid onModuleClick={handleModuleClick} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;